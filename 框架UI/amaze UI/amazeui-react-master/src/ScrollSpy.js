'use strict';

var React = require('react');
var cloneElement = React.cloneElement;
var assign = require('object-assign');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var isInViewport = require('./utils/isInViewport');
var Events = require('./utils/Events');
var TransitionEvents = require('./utils/TransitionEvents');
var requestAnimationFrame = require('./utils/requestAnimationFrame');
var debounce = require('./utils/debounce');

var ScrollSpy = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    animation: React.PropTypes.string,
    delay: React.PropTypes.number,
    repeat: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      animation: 'fade',
      delay: 0,
      repeat: false
    };
  },

  getInitialState: function() {
    return {
      inViewport: false
    };
  },

  componentDidMount: function() {
    this.checkRAF();

    var debounced = debounce(this.checkRAF, 60).bind(this);

    this._scrollListener = Events.on(window, 'scroll', this.checkRAF);
    this._resizeListener = Events.on(window, 'resize', debounced);
    this._orientationListener = Events.on(window, 'orientationchange',
      debounced);
  },

  componentWillMount: function() {
    this._scrollListener && this._scrollListener.off();
    this._resizeListener && this._resizeListener.off();
    this._orientationListener && this._orientationListener.off();
    clearTimeout(this._timer);
  },

  checkIsInView: function() {
    if (!TransitionEvents.support.animationend) {
      return;
    }

    if (this.isMounted) {
      var isInView = isInViewport(React.findDOMNode(this));

      if (isInView && !this.state.inViewport) {
        if (this._timer) {
          clearTimeout(this._timer);
        }

        this._timer = setTimeout(function() {
          this.setState({
            inViewport: true
          });
        }.bind(this), this.props.delay);
      }

      if (this.props.repeat && !isInView) {
        this.setState({
          inViewport: false
        });
      }
    }
  },

  checkRAF: function() {
    requestAnimationFrame(this.checkIsInView);
  },

  render: function() {
    var animation = this.state.inViewport ?
      this.setClassNamespace('animation-' + this.props.animation) : null;
    var child = React.Children.only(this.props.children);

    // transfer child's props to cloned element
    return cloneElement(child, assign({}, child.props, {
      className: classNames(child.props.className, animation),
      'data-am-scrollspy': 'animation', // style helper
      delay: this.props.delay
    }));
  }
});

module.exports = ScrollSpy;
