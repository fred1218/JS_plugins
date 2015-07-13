'use strict';

var React = require('react');
var classNames = require('classnames');
var assign = require('object-assign');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var createChainedFunction = require('./utils/createChainedFunction');
var Icon = require('./Icon');
var Button = require('./Button');

var Topbar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    componentTag: React.PropTypes.node,
    brand: React.PropTypes.node,
    brandLink: React.PropTypes.string,
    inverse: React.PropTypes.bool,
    fixedTop: React.PropTypes.bool,
    fixedBottom: React.PropTypes.bool,
    toggleBtn: React.PropTypes.node,
    toggleNavKey: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    onToggle: React.PropTypes.func,
    navExpanded: React.PropTypes.bool,
    defaultNavExpanded: React.PropTypes.bool,
    fluid: React.PropTypes.bool
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'topbar',
      componentTag: 'header'
    };
  },

  getInitialState: function() {
    return {
      navExpanded: this.props.defaultNavExpanded
    };
  },

  shouldComponentUpdate: function() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  },

  handleToggle: function() {
    if (this.props.onToggle) {
      this._isChanging = true;
      this.props.onToggle();
      this._isChanging = false;
    }

    this.setState({
      navExpanded: !this.state.navExpanded
    });
  },

  isNavExpanded: function() {
    return this.props.navExpanded != null ?
      this.props.navExpanded : this.state.navExpanded;
  },

  renderBrand: function() {
    var brand = this.props.brand;
    var brandClassName = this.prefixClass('brand');

    if (React.isValidElement(brand)) {
      return React.cloneElement(brand, assign({}, brand.props,
        {
          className: classNames(brand.props.className, brandClassName),
          onClick: createChainedFunction(this.handleToggle,
            brand.props.onClick)
        }
      ));
    }

    return brand ? (
      <h1 className={brandClassName}>
        {this.props.brandLink ? (
          <a href={this.props.brandLink}>
            {this.props.brand}
          </a>
        ) : this.props.brand}
      </h1>
    ) : null;
  },

  renderToggleButton: function() {
    var toggleBtn = this.props.toggleBtn;
    var toggleBtnClassName = this.prefixClass('toggle');

    if (React.isValidElement(toggleBtn)) {
      return React.cloneElement(toggleBtn, assign({}, toggleBtn.props,
        {
          className: classNames(toggleBtn.props.className, toggleBtnClassName),
          onClick: createChainedFunction(this.handleToggle,
            toggleBtn.props.onClick)
        }
      ));
    }

    return (
      <Button
        amSize="sm"
        onClick={this.handleToggle}
        className={classNames(this.prefixClass('btn'),
        this.prefixClass('toggle'), this.setClassNamespace('show-sm-only'))}>
        <span className={this.setClassNamespace('sr-only')}>导航切换</span>
        <Icon icon="bars" />
      </Button>
    );
  },

  renderChild: function(child, i) {
    return React.cloneElement(child, assign({}, child.props, {
      topbar: true,
      collapsible: this.props.toggleNavKey != null &&
        this.props.toggleNavKey === child.props.eventKey,
      expanded: this.props.toggleNavKey != null &&
        this.props.toggleNavKey === child.props.eventKey &&
      this.isNavExpanded(),
      key: child.key ? child.key : i,
      className: classNames(child.props.className, child.props.right ?
        this.prefixClass('right') : null)
    }));
  },

  render: function() {
    var classes = this.getClassSet();
    var Component = this.props.componentTag;

    // set classes
    classes[this.prefixClass('inverse')] = this.props.inverse;
    classes[this.prefixClass('fixed-top')] = this.props.fixedTop;
    classes[this.prefixClass('fixed-bottom')] = this.props.fixedBottom;

    return (
      <Component
        {...this.props}
        className={classNames(classes, this.props.className)}>
        <div
          className={!this.props.fluid ?
          this.setClassNamespace('container') : null}>
          {this.renderBrand()}
          {this.renderToggleButton()}
          {React.Children.map(this.props.children, this.renderChild)}
        </div>
      </Component>
    );
  }
});

module.exports = Topbar;
