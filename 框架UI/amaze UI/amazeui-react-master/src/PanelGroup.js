'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var PanelGroup = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    amStyle: React.PropTypes.string,
    activeKey: React.PropTypes.any,
    defaultActiveKey: React.PropTypes.any,
    onSelect: React.PropTypes.func,
    accordion: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'panel-group'
    };
  },

  getInitialState: function() {
    return {
      activeKey: this.props.defaultActiveKey
    };
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleSelect: function(e, key) {
    e.preventDefault();

    if (this.props.onSelect) {
      this._isChanging = true;
      this.props.onSelect(key);
      this._isChanging = false;
    }

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  },

  renderPanel: function(child, index) {
    var activeKey = this.props.activeKey != null ?
      this.props.activeKey : this.state.activeKey;

    var props = {
      amStyle: child.props.amStyle || this.props.amStyle,
      key: child.key ? child.key : index,
      ref: child.ref
    };

    if (this.props.accordion) {
      props.collapsible = true;
      props.expanded = (child.props.eventKey === activeKey);
      props.onSelect = this.handleSelect;
    }

    return React.cloneElement(child, props);
  },

  render: function() {
    var classes = this.getClassSet();

    return (
      <div
        {...this.props}
        className={classNames(classes, this.props.className)}>
        {React.Children.map(this.props.children, this.renderPanel)}
      </div>
    );
  }
});

module.exports = PanelGroup;
