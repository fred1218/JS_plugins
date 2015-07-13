'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Badge = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    componentTag: React.PropTypes.node,
    href: React.PropTypes.string,
    round: React.PropTypes.bool,
    radius: React.PropTypes.bool
  },

  getDefaultProps: function () {
    return {
      classPrefix: 'badge',
      componentTag: 'span'
    };
  },

  renderAnchor: function (classSet) {
    var Component = this.props.componentTag || 'a';
    var href = this.props.href || '#';

    return (
      <Component
        {...this.props}
        href={href}
        className={classNames(classSet, this.props.className)}
        role="badge">
        {this.props.children}
      </Component>
    );
  },

  render: function () {
    var classSet = this.getClassSet();
    var Component = this.props.componentTag;
    var renderAnchor = this.props.href;

    if (renderAnchor) {
      return this.renderAnchor(classSet);
    }

    return (
      <Component
        {...this.props}
        className={classNames(classSet, this.props.className)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Badge;
