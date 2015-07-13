'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Popover = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    placement: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    positionLeft: React.PropTypes.number,
    positionTop: React.PropTypes.number,
    amSize: React.PropTypes.oneOf(['sm', 'lg']),
    amStyle: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'popover'
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var style = {
      left: this.props.positionLeft,
      top: this.props.positionTop,
      display: 'block'
    };

    classSet[this.setClassNamespace('active')] = true;
    classSet[this.prefixClass(this.props.placement)] = true;

    return (
      <div
        {...this.props}
        style={style}
        className={classNames(classSet, this.props.className)}>
        <div className={this.prefixClass('inner')}>
          {this.props.children}
        </div>
        <div className={this.prefixClass('caret')}></div>
      </div>
    );
  }
});

module.exports = Popover;
