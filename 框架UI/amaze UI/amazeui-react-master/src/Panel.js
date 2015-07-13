'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var CollapseMixin = require('./mixins/CollapseMixin');

var Panel = React.createClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    collapsible: React.PropTypes.bool,
    header: React.PropTypes.node,
    footer: React.PropTypes.node,
    id: React.PropTypes.string,
    amStyle: React.PropTypes.string,
    onSelect: React.PropTypes.func,
    eventKey: React.PropTypes.any
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'panel',
      amStyle: 'default'
    };
  },

  handleClick: function(e) {
    e.selected = true;

    if (this.props.onSelect) {
      this.props.onSelect(e, this.props.eventKey);
    } else {
      e.preventDefault();
    }

    if (e.selected) {
      this.handleToggle();
    }
  },

  handleToggle: function() {
    this.setState({expanded:!this.state.expanded});
  },

  getCollapsibleDimensionValue: function() {
    return React.findDOMNode(this.refs.panel).scrollHeight;
  },

  getCollapsibleDOMNode: function() {
    if (!this.isMounted() || !this.refs || !this.refs.panel) {
      return null;
    }

    return React.findDOMNode(this.refs.panel);
  },

  renderHeader: function() {
    if (!this.props.header) {
      return null;
    }

    var header = this.props.header;

    return (
      <div className={this.prefixClass('hd')}>
        {this.props.collapsible ? (
          <h4
            data-am-collapse // just for `pointer` style
            className={classNames(this.prefixClass('title'),
            this.isExpanded() ? null : this.setClassNamespace('collapsed'))}
            onClick={this.handleClick}>
            {header}
          </h4>) : header}
      </div>
    );
  },

  renderBody: function() {
    var bodyClass = this.prefixClass('bd');
    var bodyChildren = this.props.children;
    var bodyElements = [];
    var panelBodyChildren = [];

    function getProps() {
      return {
        key: bodyElements.length
      };
    }

    function addFillChild(child) {
      bodyElements.push(React.cloneElement(child, getProps()));
    }

    function addPanelBody(child) {
      bodyElements.push(
        <div className={bodyClass} {...getProps} key="panelBody">
          {child}
        </div>
      );
    }

    function maybeRenderPanelBody() {
      if (panelBodyChildren.length === 0) {
        return;
      }

      addPanelBody(panelBodyChildren);
      panelBodyChildren = [];
    }

    if (Array.isArray(bodyChildren)) {
      bodyChildren.forEach(function(child) {
        // props fill and isValidElement
        if (this.shouldRenderFill(child)) {
          maybeRenderPanelBody();

          addFillChild(child);
        } else {
          panelBodyChildren.push(child);
        }

      }.bind(this));

      maybeRenderPanelBody();
    } else {
      if (this.shouldRenderFill(bodyChildren)) {
        addFillChild(bodyChildren);
      } else {
        addPanelBody(bodyChildren);
      }
    }

    return bodyElements;
  },

  renderCollapsibleBody: function() {
    var collapseClass = this.prefixClass('collapse');

    return (
      <div
        className={classNames(this.getCollapsibleClassSet(collapseClass))}
        id={this.props.id}
        ref='panel'>
        {this.renderBody()}
      </div>
    );
  },

  shouldRenderFill: function(child) {
    return React.isValidElement(child) && child.props.fill;
  },

  renderFooter: function() {
    if (!this.props.footer) {
      return null;
    }

    return (
      <div className={this.prefixClass('footer')}>
        {this.props.footer}
      </div>
    );
  },

  render: function() {
    var classes = this.getClassSet();
    var collapsible = this.props.collapsible;

    return (
      <div
        {...this.props}
        id={collapsible ? null : this.props.id}
        className={classNames(classes, this.props.className)}>
        {this.renderHeader()}
        {collapsible ? this.renderCollapsibleBody() : this.renderBody()}
        {this.renderFooter()}
      </div>
    );
  }
});

module.exports = Panel;
