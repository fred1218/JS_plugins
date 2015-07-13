'use strict';

var React = require('react');
var assign = require('object-assign');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Events = require('./utils/Events');
var debounce = require('./utils/debounce');
var domUtils = require('./utils/domUtils');

var Sticky = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    media: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    top: React.PropTypes.number,
    animation: React.PropTypes.string,
    bottom: React.PropTypes.oneOfType([
      React.PropTypes.number,
      React.PropTypes.func
    ])
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'sticky',
      top: 0
    };
  },

  getInitialState: function() {
    return {
      sticked: false,
      holderStyle: null,
      initialized: false,
      stickerStyle: null
    };
  },

  componentDidMount: function() {
    this._init();
    this.checkPosition();
    var ownerWindow = domUtils.ownerWindow(React.
      findDOMNode(this.refs.sticker));

    this._scrollListener = Events.on(ownerWindow, 'scroll',
      debounce(this.checkPosition, 10).bind(this));
    this._resizeListener = Events.on(ownerWindow, 'resize',
      debounce(this.checkPosition, 50).bind(this));
  },

  componentWillMount: function() {
    this._scrollListener && this._scrollListener.off();
    this._resizeListener && this._resizeListener.off();
  },

  _init: function() {
    if (this.state.initialized || !this.isMounted || !this.checkMedia()) {
      return;
    }

    var sticker = React.findDOMNode(this.refs.sticker);
    var elStyle = getComputedStyle(sticker);
    var outerHeight = parseInt(elStyle.height, 10) +
      parseInt(elStyle.marginTop, 10) + parseInt(elStyle.marginBottom, 10);
    var style = {
      height: elStyle.position !== 'absolute' ? outerHeight : '',
      float: elStyle.float !== 'none' ? elStyle.float : '',
      margin: elStyle.margin
    };

    this.setState({
      initialized: true,
      holderStyle: style,
      stickerStyle: {
        margin: 0
      }
    });
  },

  checkPosition: function() {
    if (this.isMounted) {
      var scrollTop = domUtils.scrollTop(window);
      var offsetTop = this.props.top;
      var offsetBottom = this.props.bottom;
      var holder = React.findDOMNode(this);

      if (typeof offsetBottom === 'function') {
        offsetBottom = offsetBottom();
      }

      var checkResult = (scrollTop > domUtils.offset(holder).top);

      if (checkResult && !this.state.sticked) {
        this.setState({
          stickerStyle: {
            top: offsetTop,
            left: domUtils.offset(holder).left,
            width: holder.offsetWidth
          }
        });
      }

      if (this.state.sticked && !checkResult) {
        this.resetSticker();
      }

      this.setState({
        sticked: checkResult
      });
    }
  },

  checkMedia: function() {
    // TODO: add element visible detector
    /*if (!this.$element.is(':visible')) {
     return false;
     }*/

    var media = this.props.media;

    if (media) {
      switch (typeof media) {
        case 'number':
          if (window.innerWidth < media) {
            return false;
          }
          break;

        case 'string':
          if (window.matchMedia && !window.matchMedia(media).matches) {
            return false;
          }
          break;
      }
    }

    return true;
  },

  resetSticker: function() {
    this.setState({
      stickerStyle: {
        position: '',
        top: '',
        width: '',
        left: '',
        margin: 0
      }
    });
  },

  // Smooth scroll
  handleClick: function(e) {
    e.preventDefault();

    if (e.target && e.target.nodeName === 'A') {
      var targetNode = document.getElementById(e.target.getAttribute('href').
        substr(1));

      targetNode && this.smoothScroll(window, {
        position: domUtils.offset(targetNode).top - this.props.offsetTop || 0
      });
    }
  },

  render: function() {
    var stickyClass = this.getClassSet();
    var child = React.Children.only(this.props.children);
    var animation = this.props.animation && this.state.sticked ?
      this.setClassNamespace('animation-' + this.props.animation) : null;

    // transfer child's props to cloned element
    return (
      <div
        {...this.props}
        style={this.state.holderStyle}
        className={classNames(this.props.className,
        this.prefixClass('placeholder'))}>
        {React.cloneElement(child, assign({}, child.props, {
          style: this.state.stickerStyle,
          ref: 'sticker',
          className: classNames(child.props.className,
            this.state.sticked ? stickyClass : null, animation)
        }))}
      </div>
    );
  }
});

module.exports = Sticky;
