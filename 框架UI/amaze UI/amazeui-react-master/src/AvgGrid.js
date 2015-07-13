'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var AvgGrid = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'avg',
      componentTag: 'ul'
    };
  },

  render: function() {
    var Component = this.props.componentTag;
    var classSet = {};
    var prefixClass = this.prefixClass;
    var props = this.props;

    ['sm', 'md', 'lg'].forEach(function(size) {
      if (props[size]) {
        classSet[prefixClass(size + '-' + props[size])] = true;
      }
    });

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = AvgGrid;
