'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Container = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'container',
      componentTag: 'div'
    };
  },

  render: function() {
    var Component = this.props.componentTag;
    var classSet = this.getClassSet();

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Container;
