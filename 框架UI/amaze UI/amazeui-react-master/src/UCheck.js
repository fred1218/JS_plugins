'use strict';

/**
 * Custom radio/checkbox style
 */

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Input = require('./Input');
var constants = require('./constants');

var UCheck = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    type: React.PropTypes.oneOf(['radio', 'checkbox']),
    disabled: React.PropTypes.bool,
    amStyle: React.PropTypes.oneOf(['secondary', 'success', 'warning',
      'danger']),
    inline: React.PropTypes.bool,
    hasFeedback: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      type: 'checkbox'
    };
  },

  render: function() {
    var classSet = {};

    classSet[this.setClassNamespace(this.props.type)] = !this.props.inline;
    classSet[this.setClassNamespace(this.props.type + '-inline')] =
      this.props.inline;

    if (this.props.amStyle) {
      classSet[this.setClassNamespace(this.props.amStyle)] = true;
    }

    return (
      <label className={classNames(this.props.className, classSet)}>
        <Input
          {...this.props}
          ref="field"
          className={this.setClassNamespace('ucheck-checkbox')} standalone />

        <span className={this.setClassNamespace('ucheck-icons')}>
          <i className="am-icon-unchecked"></i>
          <i className="am-icon-checked"></i>
        </span>

        {this.props.label}
      </label>
    );
  }
});

module.exports = UCheck;

// TODO: replace icon with Icon component
