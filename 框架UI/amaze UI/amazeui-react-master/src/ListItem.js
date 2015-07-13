'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var ListItem = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    href: React.PropTypes.string,
    truncate: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      componentTag: 'li'
    };
  },

  render: function() {
    var classes = {};
    var Component = this.props.componentTag;

    // set .am-text-truncate
    classes['am-text-truncate'] = this.props.truncate;

    // render Anchor
    if (this.props.href) {
      return this.renderAnchor(classes);
    }

    return (
      <Component
        {...this.props}
        className={classNames(classes, this.props.className)}>
        {this.props.children}
      </Component>
    );
  },

  renderAnchor: function(classes) {
    var props = this.props;
    var Component = props.componentTag;
    var truncate = props.truncate ? 'am-text-truncate' : '';

    return (
      <Component
        {...props}
        className={classNames(classes, this.props.className)}>
        <a
          className={truncate}
          href={this.props.href}
          title={this.props.title}
          target={this.props.target}>
          {this.props.children}
        </a>
      </Component>
    );
  }
});

module.exports = ListItem;
