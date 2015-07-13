'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var ButtonGroup = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    stacked: React.PropTypes.bool,
    justify: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'btn-group'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

    classSet[this.prefixClass('stacked')] = this.props.stacked;
    classSet[this.prefixClass('justify')] = this.props.justify;

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonGroup;
