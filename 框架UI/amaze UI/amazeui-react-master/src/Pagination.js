'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Pagination = React.createClass({
  mixins: [ClassNameMixin],

  PropTypes: {
    componentTag: React.PropTypes.node.isRequired,
    centered: React.PropTypes.bool,
    right: React.PropTypes.bool,
    theme: React.PropTypes.oneOf(['default', 'select']),
    data: React.PropTypes.object,
    onSelect: React.PropTypes.func
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'pagination',
      componentTag: 'ul'
    };
  },

  renderItem: function(type) {
    var data = this.props.data;

    return data && data[type + 'Title'] && data[type + 'Link'] ? (
      <Pagination.Item
        onClick={this.props.onSelect &&
        this.props.onSelect.bind(this, data[type + 'Link'])}
        key={type}
        href={data[type + 'Link']}
        className={this.prefixClass(type)}>
        {data[type + 'Title']}
      </Pagination.Item>
    ) : null;
  },

  handleChange: function(e) {
    if (this.props.onSelect) {
      var select = React.findDOMNode(this.refs.select);

      this.props.onSelect.call(this, select && select.value, e);
    }
  },

  renderPages: function() {
    var data = this.props.data;

    if (data.pages) {
      return this.props.theme === 'select' ? (
        <li className={this.prefixClass('select')}>
          <select
            onChange={this.handleChange}
            ref="select">
            {data.pages.map(function(page, i) {
              return (
                <option value={page.link} key={i}>
                  {page.title} / {data.pages.length}
                </option>
              );
            })}
          </select>
        </li>
      ) : (
        data.pages.map(function(page, i) {
          return (
            <Pagination.Item
              key={i}
              onClick={this.props.onSelect &&
                this.props.onSelect.bind(this, page.link)}
              active={page.active}
              disabled={page.disabled}
              href={page.link}>
              {page.title}
            </Pagination.Item>);
        }.bind(this)));
    }
  },

  render: function() {
    var props = this.props;
    var Component = props.componentTag;
    var classSet = this.getClassSet();
    var notSelect = props.theme !== 'select';

    // .am-pagination-right
    classSet[this.prefixClass('right')] = props.right;

    // .am-pagination-centered
    classSet[this.prefixClass('centered')] = props.centered;

    return props.data ? (
      <Component
        {...props}
        className={classNames(classSet, props.className)}>
        {notSelect && this.renderItem('first')}
        {this.renderItem('prev')}
        {this.renderPages()}
        {this.renderItem('next')}
        {notSelect && this.renderItem('last')}
      </Component>
    ) : (
      <Component
        {...props}
        className={classNames(classSet, props.className)}>
        {this.props.children}
      </Component>
    );
  }
});

Pagination.Item = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    prev: React.PropTypes.bool,
    next: React.PropTypes.bool,
    href: React.PropTypes.string,
    componentTag: React.PropTypes.node.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'pagination',
      href: '#',
      componentTag: 'li'
    };
  },

  render: function() {
    var Component = this.props.componentTag;
    var classSet = this.getClassSet(true);
    var props = this.props;

    // .am-pagination-prev
    classSet[this.prefixClass('prev')] = props.prev;

    // .am-pagination-next
    classSet[this.prefixClass('next')] = props.next;

    return (
      <Component
        {...this.props}
        className={classNames(classSet, this.props.className)}>
        <a
          href={this.props.href}
          title={this.props.title}
          target={this.props.target}
          ref="anchor">
          {this.props.children}
        </a>
      </Component>
    );
  }
});

module.exports = Pagination;
