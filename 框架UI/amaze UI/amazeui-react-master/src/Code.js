'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Code = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
  },

  getDefaultProps: function() {
  },

  render: function() {
    return (
      <pre>
        {this.props.children}
      </pre>
    );
  }
});

module.exports = Code;

// TODO:
// - 自动编码
// - highlight
// 创建一个独立插件应该更好一些
