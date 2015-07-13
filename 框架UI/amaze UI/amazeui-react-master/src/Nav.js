'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Nav = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    justify: React.PropTypes.bool,
    pills: React.PropTypes.bool,
    tabs: React.PropTypes.bool,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'nav',
      componentTag: 'ul'
    };
  },

  render: function() {
    var classes = this.getClassSet();
    var Component = this.props.componentTag;

    // set classes
    classes[this.prefixClass('pills')] = this.props.pills || this.props.topbar;
    classes[this.prefixClass('tabs')] = this.props.tabs;
    classes[this.prefixClass('justify')] = this.props.justify;

    // topbar class
    classes[this.setClassNamespace('topbar-nav')] = this.props.topbar;

    return (
      <Component
        {...this.props}
        className={classNames(classes, this.props.className)}>
        {this.props.children}
      </Component>
    );
  }
});

module.exports = Nav;
