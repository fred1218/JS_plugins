'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Breadcrumb = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    slash: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'breadcrumb',
      componentTag: 'ul'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var Component = this.props.componentTag;

    classes[this.prefixClass('slash')] = this.props.slash;

    return (
      <Component
        {...this.props}
        className={classNames(classes, this.props.className)}>
        {this.props.children}
      </Component>
    );
  }
});

Breadcrumb.Item = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    active: React.PropTypes.bool,
    href: React.PropTypes.string,
    title: React.PropTypes.string,
    target: React.PropTypes.string
  },

  renderAnchor: function(classes) {
    return (
      <li
        {...this.props}
        className={classes}>
        <a
          href={this.props.href}
          title={this.props.title}
          target={this.props.target}>
          {this.props.children}
        </a>
      </li>
    );
  },

  render: function() {
    var classes = classNames(this.props.className);

    if (this.props.href) {
      return this.renderAnchor(classes);
    }

    return (
      <li
        {...this.props}
        className={classes}>
        {this.props.children}
      </li>
    );
  }
});

module.exports = Breadcrumb;
