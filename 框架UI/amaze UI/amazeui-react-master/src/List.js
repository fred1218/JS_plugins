'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var List = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    border: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    static: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'list',
      componentTag: 'ul'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var Component = this.props.componentTag;
    var props = this.props;
    var prefixClass = this.prefixClass;

    // am-list-border
    classes[prefixClass('border')] = props.border;

    // am-list-striped
    classes[prefixClass('striped')] = props.striped;

    // am-list-static
    classes[prefixClass('static')] = props.static;

    return (
      <Component
        {...props}
        className={classNames(classes, props.className)}>
        {props.children}
      </Component>
    );
  }
});

module.exports = List;
