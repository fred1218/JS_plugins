'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Alert = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    amStyle: React.PropTypes.oneOf(['secondary', 'success', 'warning',
      'danger']),
    onClose: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'alert'
    };
  },

  renderCloseBtn: function() {
    return (
      <button
        type='button'
        className={this.setClassNamespace('close')}
        onClick={this.props.onClose}>
        &times;
      </button>
    );
  },

  render: function() {
    var classSet = this.getClassSet();
    var isCloseable = !!this.props.onClose;

    if (this.props.amStyle) {
      classSet[this.prefixClass(this.props.amStyle)] = true;
    }

    classSet[this.prefixClass('closeable')] = isCloseable;

    return (
      <div
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {isCloseable ? this.renderCloseBtn() : null}
        {this.props.children}
      </div>
    );
  }
});

module.exports = Alert;
