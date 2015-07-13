'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var constants = require('./constants');
var Button = require('./Button');
var Icon = require('./Icon');
var Events = require('./utils/Events');
var isNodeInTree = require('./utils/isNodeInTree');

var Dropdown = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    title: React.PropTypes.node.isRequired,
    dropup: React.PropTypes.bool,
    navItem: React.PropTypes.bool,
    btnStyle: React.PropTypes.string,
    btnInlineStyle: React.PropTypes.object,
    contentInlineStyle: React.PropTypes.object,
    contentTag: React.PropTypes.node,
    toggleClassName: React.PropTypes.string,
    caretClassName: React.PropTypes.string,
    contentClassName: React.PropTypes.string,
    onOpen: React.PropTypes.func, // open callback
    onClose: React.PropTypes.func // close callback
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'dropdown',
      contentTag: 'ul'
    };
  },

  getInitialState: function() {
    return {
      open: false
    };
  },

  componentWillMount: function() {
    this.unbindOuterHandlers();
  },

  setDropdownState: function(state, callback) {
    if (state) {
      this.bindOuterHandlers();
    } else {
      this.unbindOuterHandlers();
    }

    this.setState({
      open: state
    }, function() {
      callback && callback();

      state && this.props.onOpen && this.props.onOpen();
      !state && this.props.onClose && this.props.onClose();
    });
  },

  // close dropdown on `esc` keyup
  handleKeyup: function(e) {
    (e.keyCode === 27) && this.setDropdownState(false);
  },

  // close dropdown when click outer dropdown
  handleOuterClick: function(e) {
    if (isNodeInTree(e.target, React.findDOMNode(this))) {
      return false;
    }

    this.setDropdownState(false);
  },

  bindOuterHandlers: function() {
    Events.on(document, 'click', this.handleOuterClick);
    Events.on(document, 'keyup', this.handleKeyup);
  },

  unbindOuterHandlers: function() {
    Events.off(document, 'click', this.handleOuterClick);
    Events.off(document, 'keyup', this.handleKeyup);
  },

  handleDropdownClick: function(e) {
    e.preventDefault();

    this.setDropdownState(!this.state.open);
  },

  render: function() {
    var classSet = this.getClassSet();
    var Component = this.props.navItem ? 'li' : 'div';
    var caret = (<Icon
      className={this.props.caretClassName}
      icon={'caret-' + (this.props.dropup ? 'up' : 'down')} />);
    var animation = this.state.open ?
      this.setClassNamespace('animation-slide-top-fixed') :
      this.setClassNamespace('dropdown-animation');
    var ContentTag = this.props.contentTag;

    classSet[constants.CLASSES.active] = this.state.open;
    classSet[this.prefixClass('up')] = this.props.dropup;

    return (
      <Component
        btnStyle={null}
        className={classNames(this.props.className, classSet)}>
        <Button
          onClick={this.handleDropdownClick}
          amStyle={this.props.btnStyle}
          style={this.props.btnInlineStyle}
          className={classNames(this.prefixClass('toggle'),
          this.props.toggleClassName)}
          ref="dropdownToggle">
          {this.props.title}
          {' '}
          {caret}
        </Button>
        <ContentTag
          ref="dropdownContent"
          style={this.props.contentInlineStyle}
          className={classNames(this.prefixClass('content'),
          animation, this.props.contentClassName)}>
          {this.props.children}
        </ContentTag>
      </Component>
    );
  }
});

Dropdown.Item = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    href: React.PropTypes.string,
    target: React.PropTypes.string,
    title: React.PropTypes.string,
    header: React.PropTypes.bool,
    divider: React.PropTypes.bool
  },

  render: function() {
    var classSet = this.getClassSet();
    var children = null;

    classSet[this.setClassNamespace('dropdown-header')] = this.props.header;

    if (this.props.header) {
      children = this.props.children;
    } else if (!this.props.divider) {
      children = (
        <a
          onClick={this.handleClick}
          href={this.props.href}
          target={this.props.target}
          title={this.props.title}>
          {this.props.children}
        </a>
      );
    }

    return (
      <li
        {...this.props}
        title={null}
        href={null}
        className={classNames(this.props.className, classSet)}>
        {children}
      </li>
    );
  }
});

module.exports = Dropdown;

/*
* TODO:
*   1. 关闭动画
*   2. 位置检测/宽度适应
* */
