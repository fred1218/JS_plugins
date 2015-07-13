'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Icon = require('./Icon');

var Close = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    componentTag: React.PropTypes.node,
    spin: React.PropTypes.bool,
    alt: React.PropTypes.bool,
    icon: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'close',
      type: 'button'
    };
  },

  render: function() {
    var Component = this.props.componentTag || 'button';
    var classSet = this.getClassSet();
    var props = this.props;

    // transfer type
    if (Component !== 'button') {
      props.type = undefined;
    }

    // className am-close-alt am-close-spin
    classSet[this.prefixClass('alt')] = this.props.alt;
    classSet[this.prefixClass('spin')] = this.props.spin;

    return (
      <Component
        {...props}
        className={classNames(classSet, this.props.className)}
        role="close">
        {this.props.icon ? <Icon icon="times" /> : '\u00D7'}
      </Component>
    );
  }
});

module.exports = Close;
