'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Grid = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node.isRequired,
    collapse: React.PropTypes.bool,
    fixed: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'g',
      componentTag: 'div'
    };
  },

  render: function() {
    var Component = this.props.componentTag;
    var classSet = this.getClassSet();
    var props = this.props;

    // .am-g-fixed
    classSet[this.prefixClass('fixed')] = props.fixed;

    // .am-g-collapse
    classSet[this.prefixClass('collapse')] = props.collapse;

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Grid;
