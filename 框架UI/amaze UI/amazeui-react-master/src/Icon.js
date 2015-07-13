'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Icon = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    amStyle: React.PropTypes.string,
    fw: React.PropTypes.bool,
    spin: React.PropTypes.bool,
    button: React.PropTypes.bool,
    size: React.PropTypes.string,
    href: React.PropTypes.string,
    componentTag: React.PropTypes.node.isRequired,
    icon: React.PropTypes.string.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'icon',
      componentTag: 'span'
    };
  },

  render: function() {
    var classes = this.getClassSet(true);
    var props = this.props;
    var Component = props.href ? 'a' : props.componentTag;
    var prefixClass = this.prefixClass;
    var setClassNamespace = this.setClassNamespace;

    // am-icon-[iconName]
    classes[prefixClass(props.icon)] = true;

    // am-icon-btn
    classes[prefixClass('btn')] = props.button;

    // button style
    props.button && props.amStyle &&
    (classes[setClassNamespace(props.amStyle)] = true);

    // am-icon-fw
    classes[prefixClass('fw')] = props.fw;

    // am-icon-spin
    classes[prefixClass('spin')] = props.spin;

    return (
      <Component
        {...props}
        className={classNames(classes, this.props.className)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Icon;
