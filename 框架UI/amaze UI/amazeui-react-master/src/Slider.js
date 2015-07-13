'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var TransitionEvents = require('./utils/TransitionEvents');

React.initializeTouchEvents(true);

var Slider = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: React.PropTypes.oneOf(['default', 'a1', 'a2', 'a3', 'a4', 'a5',
      'b1', 'b2', 'b3', 'b4', 'c1', 'c2', 'c3', 'c4', 'd1', 'd2', 'd3']),
    directionNav: React.PropTypes.bool,   // prev/next icon
    controlNav: React.PropTypes.bool,

    animation: React.PropTypes.string,    // not working
    slide: React.PropTypes.bool,
    autoPlay: React.PropTypes.bool,
    slideSpeed: React.PropTypes.number,   // interval
    loop: React.PropTypes.bool,           // loop slide

    pauseOnHover: React.PropTypes.bool,
    touch: React.PropTypes.bool,          // TODO: add touch support

    onSelect: React.PropTypes.func,
    onSlideEnd: React.PropTypes.func,
    activeIndex: React.PropTypes.number,
    defaultActiveIndex: React.PropTypes.number,
    direction: React.PropTypes.oneOf(['prev', 'next'])
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'slider',
      theme: 'default',
      directionNav: true,
      controlNav: true,
      slide: true,
      autoPlay: true,
      loop: true,
      slideSpeed: 5000,
      pauseOnHover: true
    };
  },

  getInitialState: function() {
    return {
      activeIndex: this.props.defaultActiveIndex == null ?
        0 : this.props.defaultActiveIndex,
      previousActiveIndex: null,
      direction: null
    };
  },

  componentWillReceiveProps: function(nextProps) {
    var activeIndex = this.getActiveIndex();

    if (nextProps.activeIndex != null &&
      nextProps.activeIndex !== activeIndex) {
      clearTimeout(this.timeout);
      this.setState({
        previousActiveIndex: activeIndex,
        direction: nextProps.direction != null ? nextProps.direction :
          this.getDirection(activeIndex, nextProps.activeIndex)
      });
    }
  },

  componentDidMount: function() {
    this.props.autoPlay && this.waitForNext();
  },

  componentWillUnmount: function() {
    clearTimeout(this.timeout);
  },

  getDirection: function(prevIndex, index) {
    if (prevIndex === index) {
      return null;
    }

    return prevIndex > index ? 'prev' : 'next';
  },

  next: function(e) {
    e && e.preventDefault();

    var index = this.getActiveIndex() + 1;
    var count = React.Children.count(this.props.children);

    if (index > count - 1) {
      if (!this.props.loop) {
        return;
      }
      index = 0;
    }

    this.handleSelect(index, 'next');
  },

  prev: function(e) {
    e && e.preventDefault();

    var index = this.getActiveIndex() - 1;

    if (index < 0) {
      if (!this.props.loop) {
        return;
      }
      index = React.Children.count(this.props.children) - 1;
    }

    this.handleSelect(index, 'prev');
  },

  pause: function() {
    this.isPaused = true;
    clearTimeout(this.timeout);
  },

  play: function() {
    this.isPaused = false;
    this.waitForNext();
  },

  waitForNext: function() {
    if (!this.isPaused && this.props.slide && this.props.slideSpeed &&
      this.props.activeIndex == null) {
      this.timeout = setTimeout(this.next, this.props.slideSpeed);
    }
  },

  handleMouseOver: function() {
    if (this.props.pauseOnHover) {
      this.pause();
    }
  },

  handleMouseOut: function() {
    if (this.isPaused) {
      this.play();
    }
  },

  getActiveIndex: function() {
    return this.props.activeIndex != null ?
      this.props.activeIndex : this.state.activeIndex;
  },

  handleItemAnimateOutEnd: function() {
    this.setState({
      previousActiveIndex: null,
      direction: null
    }, function() {
      this.waitForNext();

      if (this.props.onSlideEnd) {
        this.props.onSlideEnd();
      }
    });
  },

  handleSelect: function(index, direction, e) {
    e && e.preventDefault();
    clearTimeout(this.timeout);

    var previousActiveIndex = this.getActiveIndex();

    direction = direction || this.getDirection(previousActiveIndex, index);

    if (this.props.onSelect) {
      this.props.onSelect(index, direction);
    }

    if (this.props.activeIndex == null && index !== previousActiveIndex) {
      if (this.state.previousActiveIndex != null) {
        // If currently animating don't activate the new index.
        // TODO: look into queuing this canceled call and
        // animating after the current animation has ended.
        return;
      }

      this.setState({
        activeIndex: index,
        previousActiveIndex: previousActiveIndex,
        direction: direction
      });
    }
  },

  renderDirectionNav: function() {
    return this.props.directionNav ? (
      <ul className={this.setClassNamespace('direction-nav')}>
        <li>
          <a
            onClick={this.prev}
            className={this.setClassNamespace('prev')}
            href="#prev">
            Previous
          </a>
        </li>
        <li>
          <a
            onClick={this.next}
            className={this.setClassNamespace('next')}
            href="#next">
            Next
          </a>
        </li>
      </ul>
    ) : null;
  },

  renderControlNav: function() {
    if (this.props.controlNav) {
      var isThumbnailNav = false;
      var children = React.Children.map(this.props.children,
        function(child, i) {
        var className = (i === this.getActiveIndex()) ?
          this.setClassNamespace('active') : null;

        if (!isThumbnailNav) {
          isThumbnailNav = !!child.props.thumbnail;
        }

        var thumb = child.props.thumbnail;

        return (
          <li
            onClick={this.handleSelect.bind(this, i, null)}
            key={i}>
            {thumb ? (
              <img className={className} src={thumb} />
            ) : (
              <a href={'#' + i} className={className} />)}
            <i></i>
          </li>
        );
      }.bind(this));
      var controlClass = this.setClassNamespace('control-' +
        (isThumbnailNav ? 'thumbs' : 'paging'));

      return (
        <ol
          className={classNames(this.setClassNamespace('control-nav'),
          controlClass)}>
          {children}
        </ol>
      );
    }

    return null;
  },

  renderItem: function(child, index) {
    var activeIndex = this.getActiveIndex();
    var isActive = (index === activeIndex);
    var isPreviousActive = this.state.previousActiveIndex != null &&
      this.state.previousActiveIndex === index && this.props.slide;

    return React.cloneElement(
      child,
      {
        active: isActive,
        ref: child.ref,
        key: child.key ? child.key : index,
        index: index,
        animateOut: isPreviousActive,
        animateIn: isActive && this.state.previousActiveIndex != null &&
          this.props.slide,
        direction: this.state.direction,
        onAnimateOutEnd: isPreviousActive ? this.handleItemAnimateOutEnd : null
      }
    );
  },

  render: function() {
    var classSet = this.getClassSet();
    var viewportStyle = {
      overflow: 'hidden',
      position: 'relative',
      width: '100%'
    };

    // React version slider style
    classSet[this.prefixClass('slide')] = true;

    return (
      <div
        {...this.props}
        className={classNames(classSet, this.props.className)}
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}>
        <div
          className={this.setClassNamespace('viewport')}
          style={viewportStyle}>
          <ul className={this.setClassNamespace('slides')}>
            {React.Children.map(this.props.children, this.renderItem)}
          </ul>
        </div>
        {this.renderDirectionNav()}
        {this.renderControlNav()}
      </div>
    );
  }
});

Slider.Item = React.createClass({
  propTypes: {
    direction: React.PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: React.PropTypes.func,
    active: React.PropTypes.bool,
    animateIn: React.PropTypes.bool,
    animateOut: React.PropTypes.bool,
    caption: React.PropTypes.node,
    index: React.PropTypes.number,
    thumbnail: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      direction: null
    };
  },

  getDefaultProps: function() {
    return {
      animation: true
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.props.active !== nextProps.active) {
      this.setState({
        direction: null
      });
    }
  },

  componentDidUpdate: function(prevProps) {
    if (!this.props.active && prevProps.active) {
      TransitionEvents.on(React.findDOMNode(this), this.handleAnimateOutEnd);
    }

    if (this.props.active !== prevProps.active) {
      setTimeout(this.startAnimation, 20);
    }
  },

  handleAnimateOutEnd: function() {
    if (this.props.onAnimateOutEnd && this.isMounted()) {
      this.props.onAnimateOutEnd(this.props.index);
    }
  },

  startAnimation: function() {
    if (!this.isMounted()) {
      return;
    }

    this.setState({
      direction: this.props.direction === 'prev' ?
        'right' : 'left'
    });
  },

  render: function() {
    var classSet = {
      active: (this.props.active && !this.props.animateIn) ||
        this.props.animateOut,
      next: this.props.active && this.props.animateIn &&
        this.props.direction === 'next',
      prev: this.props.active && this.props.animateIn &&
        this.props.direction === 'prev'
    };

    if (this.state.direction && (this.props.animateIn ||
      this.props.animateOut)) {
      classSet[this.state.direction] = true;
    }

    return (
      <li
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </li>
    );
  }
});

module.exports = Slider;
