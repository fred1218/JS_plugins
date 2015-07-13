'use strict';

/*
* https://github.com/react-bootstrap/react-bootstrap/blob/master/src/CollapsibleNav.js
* */

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var CollapseMixin = require('./mixins/CollapseMixin');
var createChainedFunction = require('./utils/createChainedFunction');

var CollapsibleNav = React.createClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    collapsible: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    activeHref: React.PropTypes.string,
    activeKey: React.PropTypes.any,
    expanded: React.PropTypes.bool,
    eventKey: React.PropTypes.any
  },

  handleToggle: function() {
    this.setState({expanded:!this.state.expanded});
  },

  getCollapsibleDimensionValue: function() {
    var height = 0;
    var nodes = this.refs;

    for (var key in nodes) {
      if (nodes.hasOwnProperty(key)) {
        var n = React.findDOMNode(nodes[key]);
        var h = n.offsetHeight;
        var computedStyles = getComputedStyle(n, null);

        height += (h +
          parseInt(computedStyles.marginTop, 10) +
          parseInt(computedStyles.marginBottom, 10)
        );
      }
    }

    return height;
  },

  getCollapsibleDOMNode: function() {
    return React.findDOMNode(this);
  },

  getChildActiveProp: function(child) {
    if (child.props.active) {
      return true;
    }

    if (this.props.activeKey != null) {
      if (child.props.eventKey === this.props.activeKey) {
        return true;
      }
    }

    if (this.props.activeHref != null) {
      if (child.props.href === this.props.activeHref) {
        return true;
      }
    }

    return child.props.active;
  },

  renderChildren: function(child, index) {
    var key = child.key ? child.key : index;

    return React.cloneElement(
      child,
      {
        activeKey: this.props.activeKey,
        activeHref: this.props.activeHref,
        ref: 'nocollapse_' + key,
        key: key,
        navItem: true
      }
    );
  },

  renderCollapsibleNavChildren: function(child, index) {
    var key = child.key ? child.key : index;

    return React.cloneElement(
      child,
      {
        active: this.getChildActiveProp(child),
        activeKey: this.props.activeKey,
        activeHref: this.props.activeHref,
        onSelect: createChainedFunction(child.props.onSelect,
          this.props.onSelect),
        ref: 'collapsible_' + key,
        key: key
      }
    );
  },

  render: function() {
    var collapsible = this.props.collapsible;
    var classSet = collapsible ? this.getCollapsibleClassSet() : {};

    classSet[this.setClassNamespace('topbar-collapse')] = this.props.topbar;

    return (
      <div
        eventKey={this.props.eventKey}
        className={classNames(classSet, this.props.className)}>
        {React.Children.map(this.props.children, collapsible ?
          this.renderCollapsibleNavChildren :
          this.renderChildren)}
      </div>
    );
  }
});

module.exports = CollapsibleNav;
