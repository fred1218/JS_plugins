'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Col = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    smPush: React.PropTypes.number,
    mdPush: React.PropTypes.number,
    lgPush: React.PropTypes.number,
    smPull: React.PropTypes.number,
    mdPull: React.PropTypes.number,
    lgPull: React.PropTypes.number,
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node.isRequired,
    end: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'u',
      componentTag: 'div'
    };
  },

  render: function() {
    var Component = this.props.componentTag;
    var classSet = {};
    var props = this.props;
    var prefixClass = this.prefixClass;

    ['sm', 'md', 'lg'].forEach(function(size) {
      var prop = size;

      if (props[size]) {
        classSet[prefixClass(size + '-' + props[prop])] = true;
      }

      prop = size + 'Offset';
      if (props[prop] >= 0) {
        classSet[prefixClass(size + '-offset-') + props[prop]] = true;
      }

      prop = size + 'Push';
      if (props[prop] >= 0) {
        classSet[prefixClass(size + '-push-') + props[prop]] = true;
      }

      prop = size + 'Pull';
      if (props[prop] >= 0) {
        classSet[prefixClass(size + '-pull-') + props[prop]] = true;
      }

      // `xxResetOrder` prop
      // - smResetOrder
      // - mdResetOrder
      // - lgResetOrder
      if (props[size + 'ResetOrder']) {
        classSet[prefixClass(size + '-reset-order')] = true;
      }

      // `xxCentered` prop
      // - smCentered
      // - mdCentered
      // - lgCentered
      if (props[size + 'Centered']) {
        classSet[prefixClass(size + '-centered')] = true;
      }

      // `xxUnCentered` prop
      // - smUnCentered
      // - mdUnCentered
      // - lgUnCentered
      if (props[size + 'UnCentered']) {
        classSet[prefixClass(size + '-uncentered')] = true;
      }
    });

    // `end` prop - end column
    props.end && (classSet[prefixClass('end')] = true);

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Col;
