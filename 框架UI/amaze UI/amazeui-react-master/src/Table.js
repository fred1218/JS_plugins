'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Button = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    bordered: React.PropTypes.bool,
    compact: React.PropTypes.bool,
    hover: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    radius: React.PropTypes.bool,
    responsive: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'table'
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var responsive = this.props.responsive;

    classSet[this.prefixClass('bordered')] = this.props.bordered;
    classSet[this.prefixClass('compact')] = this.props.compact;
    classSet[this.prefixClass('hover')] = this.props.hover;
    classSet[this.prefixClass('striped')] = this.props.striped;
    classSet[this.prefixClass('radius')] = this.props.radius;

    // add `.am-text-nowrap` to responsive table
    classSet[this.setClassNamespace('text-nowrap')] = responsive;

    var table = (
      <table
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </table>
    );

    return responsive ? (
      <div className={this.setClassNamespace('scrollable-horizontal')}>
        {table}
      </div>
    ) : table;
  }
});

module.exports = Button;
