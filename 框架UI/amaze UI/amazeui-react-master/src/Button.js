'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var omit = require('object.omit');

var Button = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
    block: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    radius: React.PropTypes.bool,
    round: React.PropTypes.bool,
    componentTag: React.PropTypes.node,
    href: React.PropTypes.string,
    target: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'btn',
      type: 'button',
      amStyle: 'default'
    };
  },

  renderAnchor: function(classSet) {
    var Component = this.props.componentTag || 'a';
    var href = this.props.href || '#';
    var props = omit(this.props, 'type');

    return (
      <Component
        {...props}
        href={href}
        className={classNames(this.props.className, classSet)}
        role="button">
        {this.props.children}
      </Component>
    );
  },

  renderButton: function(classSet) {
    var Component = this.props.componentTag || 'button';

    return (
      <Component
        {...this.props}
        className={classNames(this.props.className, classSet)}>
        {this.props.children}
      </Component>
    );
  },

  render: function() {
    var classSet = this.getClassSet();
    var renderType = this.props.href || this.props.target ?
      'renderAnchor' : 'renderButton';

    // block button
    this.props.block && (classSet[this.prefixClass('block')] = true);

    return this[renderType](classSet);
  }
});

module.exports = Button;
