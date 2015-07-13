'use strict';

var React = require('react');
var classNames = require('classnames');
var omit = require('object.omit');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Nav = require('./Nav');
var NavItem = require('./NavItem');

var Tabs = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: React.PropTypes.oneOf(['default', 'd2']),
    onSelect: React.PropTypes.func,
    animation: React.PropTypes.oneOf(['slide', 'fade']),
    defaultActiveKey: React.PropTypes.any,
    justify: React.PropTypes.bool,
    data: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'tabs',
      animation: 'fade'
    };
  },

  getInitialState: function() {
    var defaultActiveKey = this.props.defaultActiveKey != null
      ? this.props.defaultActiveKey
      : this.getDefaultActiveKey(this.props.children);

    return {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.activeKey != null &&
      nextProps.activeKey !== this.props.activeKey) {
      this.setState({
        previousActiveKey: this.props.activeKey
      });
    }
  },

  getDefaultActiveKey: function(children) {
    var defaultActiveKey = null;

    if (this.props.data) {
      this.props.data.every(function(item, i) {
        if (item.active) {
          defaultActiveKey = i;
          return false;
        }

        return true;
      });

      return defaultActiveKey == null ? 0 : defaultActiveKey;
    }

    React.Children.forEach(children, function(child) {
      if (defaultActiveKey == null) {
        defaultActiveKey = child.props.eventKey;
      }
    });

    return defaultActiveKey;
  },

  handleClick: function(key, disabled, e) {
    e.preventDefault();
    var activeKey = this.state.activeKey;

    if (disabled) {
      return null;
    }

    if (this.props.onSelect) {
      this.props.onSelect(key);
    }

    if (activeKey !== key) {
      this.setState({
        activeKey: key,
        previousActiveKey: activeKey
      });
    }
  },

  renderNav: function() {
    var activeKey = this.state.activeKey;

    return React.Children.map(this.props.children, function(child, index) {
      var key = child.props.key || child.props.eventKey || index;
      var disabled = child.props.disabled;

      return (
        <NavItem
          href="#"
          ref={'ref' + key}
          key={key}
          onClick={this.handleClick.bind(this, key, disabled)}
          active={child.props.eventKey === activeKey}
          disabled={disabled}>
          {child.props.title}
        </NavItem>
      );
    }.bind(this));
  },

  renderTabPanels: function() {
    var activeKey = this.state.activeKey;

    return React.Children.map(this.props.children, function(child, index) {
      return (
        <Tabs.Item
          active={child.props.eventKey === activeKey}
          key={child.props.key ? child.props.key : index}>
          {child.props.children}
        </Tabs.Item>
      );
    });
  },

  // for Amaze UI tabs widget
  renderData: function() {
    var activeKey = this.state.activeKey;
    var navs = [];
    var panels = [];

    this.props.data.forEach(function(item, key) {
      navs.push(
        <NavItem
        href="#"
        ref={'ref' + key}
        key={key}
        onClick={this.handleClick.bind(this, key, item.disabled)}
        active={key === activeKey}
        disabled={item.disabled}>
        {item.title}
      </NavItem>);

      panels.push(
        <Tabs.Item
          eventKey={key}
          // active={item.active}
          active={key === activeKey}
          key={key}>
          {item.content}
        </Tabs.Item>
      );
    }.bind(this));

    return {
      navs: navs,
      panels: panels
    };
  },

  renderWrapper: function(children) {
    var classSet = this.getClassSet();
    var props = omit(this.props, 'data');

    return (
      <div
        {...props}
        data-am-widget={this.props.theme ? this.props.classPrefix : null}
        className={classNames(classSet, this.props.className)}>
        {children}
      </div>
    );
  },

  renderNavWrapper: function(children) {
    var TabsNav = this.props.theme ? 'ul' : Nav;

    return (
      <TabsNav
        key="tabsNav"
        tabs
        className={classNames(this.prefixClass('nav'),
          this.setClassNamespace('cf'))}
        justify={this.props.justify}>
        {children}
      </TabsNav>
    );
  },

  renderBodyWrapper: function(children) {
    var animationClass = this.prefixClass(this.props.animation);

    return (
      <div
        key="tabsBody"
        className={classNames(this.prefixClass('bd'), animationClass)}>
        {children}
      </div>);
  },

  render: function() {
    var children = this.props.data ? this.renderData() : {};

    return this.renderWrapper([
      this.renderNavWrapper(children.navs || this.renderNav()),
      this.renderBodyWrapper(children.panels || this.renderTabPanels())
    ]);
  }
});

Tabs.Item = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    title: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    eventKey: React.PropTypes.any,
    active: React.PropTypes.bool
  },

  render: function() {
    var classSet = {};

    classSet[this.setClassNamespace('tab-panel')] = true;
    classSet[this.setClassNamespace('fade')] = true;
    classSet[this.setClassNamespace('active')] = this.props.active;
    classSet[this.setClassNamespace('in')] = this.props.active;

    return (
      <div className={classNames(classSet)}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Tabs;
