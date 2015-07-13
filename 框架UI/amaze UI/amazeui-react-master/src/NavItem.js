'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var NavItem = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    header: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    href: React.PropTypes.any,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'nav',
      componentTag: 'li'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var props = this.props;
    var Component = props.componentTag;

    // del am-nav
    classes[this.setClassNamespace(props.classPrefix)] = false;

    // set classes
    classes[this.prefixClass('header')] = props.header;
    classes[this.prefixClass('divider')] = props.divider;

    if (props.href) {
      return this.renderAnchor(classes);
    }

    return (
      <Component
        {...props}
        className={classNames(classes, props.className)}>
          {this.props.children}
      </Component>
    );
  },

  renderAnchor: function(classes) {
    var Component = this.props.componentTag;

    var linkProps = {
      href: this.props.href,
      title: this.props.tilte,
      target: this.props.target
    };

    return (
      <Component
        {...this.props}
        className={classNames(classes, this.props.className)}>
        <a {...linkProps}>
          {this.props.children}
        </a>
      </Component>
    );
  }
});

module.exports = NavItem;

// TODO: DropDown Tab 处理
//       disabled 没有禁止链接跳转
