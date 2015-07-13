'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var CollapseMixin = require('./mixins/CollapseMixin');

var Accordion = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: React.PropTypes.oneOf(['default', 'basic', 'gapped']),
    data: React.PropTypes.array,
    activeKey: React.PropTypes.any,
    defaultActiveKey: React.PropTypes.any
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'accordion',
      theme: 'default'
    };
  },

  getInitialState: function() {
    return {
      activeKey: this.props.defaultActiveKey
    };
  },

  handleSelect: function(e, key) {
    e.preventDefault();

    if (this.state.activeKey === key) {
      key = null;
    }

    this.setState({
      activeKey: key
    });
  },

  render: function() {
    var classSet = this.getClassSet();

    classSet[this.prefixClass(this.props.theme)] = true;

    return (
      <section
        {...this.props}
        data-am-widget={this.props.classPrefix}
        className={classNames(classSet, this.props.className)}>
        {this.props.data.map(function(item, index) {
          return (
            <Accordion.Item
              title={item.title}
              expanded={item.active && item.disabled}
              defaultExpanded={item.active && !item.disabled}
              eventKey={index}
              key={index}>
              {item.content}
            </Accordion.Item>
          );
        })}
      </section>
    );
  }
});

Accordion.Item = React.createClass({
  mixins: [ClassNameMixin, CollapseMixin],

  propTypes: {
    title: React.PropTypes.node,
    expanded: React.PropTypes.bool
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

  render: function() {
    return (
      <dl className={classNames(this.setClassNamespace('accordion-item'),
       this.isExpanded() ? this.setClassNamespace('active') : null,
       this.props.expanded ? this.setClassNamespace('disabled') : null
      )}>
        <dt
          onClick={this.handleToggle}
          className={this.setClassNamespace('accordion-title')}>
          {this.props.title}
        </dt>
        <dd
          className={classNames(this.getCollapsibleClassSet())}
          ref="panel">
          <div
            className={this.setClassNamespace('accordion-content')}
            dangerouslySetInnerHTML={{__html: this.props.children}} />
        </dd>
      </dl>
    );
  }
});

module.exports = Accordion;
