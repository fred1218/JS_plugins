'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Divider = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: React.PropTypes.oneOf(['default', 'dotted', 'dashed']),
    classPrefix: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'divider',
      theme: 'default'
    };
  },

  render: function() {
    var classSet = this.getClassSet();

    return (
      <hr
        {...this.props}
        data-am-widget={this.props.classPrefix}
        className={classNames(this.props.className, classSet)} />
    );
  }
});

module.exports = Divider;
