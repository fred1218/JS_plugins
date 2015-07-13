'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var Button = require('./Button');
var Col = require('./Col');

var ListNews = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default']),
    data: React.PropTypes.object,
    header: React.PropTypes.node,
    footer: React.PropTypes.node,
    morePosition: React.PropTypes.oneOf(['top', 'bottom']),
    moreText: React.PropTypes.string,
    thumbPosition: React.PropTypes.oneOf(['top', 'left', 'right', 'bottom-left',
      'bottom-right'])
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'list-news',
      theme: 'default',
      moreText: '更多 \u00BB'
    };
  },

  renderHeader: function() {
    var data = this.props.data;

    return data && data.header && data.header.title ? (
      <div
        className={classNames(this.prefixClass('hd'),
      this.setClassNamespace('cf'))}>
        {data.header.link ? (
          <a href={data.header.link}>
            <h2>{data.header.title}</h2>
            {this.props.morePosition === 'top' ? (
              <span
                className={classNames(this.prefixClass('more'),
              this.setClassNamespace('fr'))}>
              {this.props.moreText}
            </span>
            ) : null}
          </a>
        ) : (<h2>{data.header.title}</h2>)}
      </div>
    ) : null;
  },

  // `more` on bottom
  renderFooter: function() {
    return this.props.morePosition === 'bottom' &&
    this.props.data.header.link ? (
      <div className={this.prefixClass('ft')}>
        <Button
          className={this.prefixClass('more')}
          href={this.props.data.header.link}>
          {this.props.moreText}
        </Button>
      </div>
    ) : null;
  },

  getListItemClasses: function(item) {
    return classNames(
      this.setClassNamespace('g'),
      item.date ? this.setClassNamespace('list-item-dated') : false,
      item.desc ? this.setClassNamespace('list-item-desced') : false,
      item.img ? this.setClassNamespace('list-item-thumbed') : false,
      this.props.thumbPosition ? this.setClassNamespace('list-item-thumb-' +
        this.props.thumbPosition) : false
    );
  },

  renderBody: function(children) {
    return (
      <div className={this.prefixClass('bd')}>
        <ul className={this.setClassNamespace('list')}>
          {children}
        </ul>
      </div>
    );
  },

  renderList: function() {
    var position = this.props.thumbPosition;
    var orderChildren = function(item, i) {
      var thumb = this.renderItemThumb(item, i);
      var main = this.renderItemMain(item, i);

      return (position === 'right' || position === 'bottom-right') ?
        [main, thumb] : [thumb, main];
    }.bind(this);

    return (this.props.data.main.map(function(item, i) {
      return (
        <li
          key={i}
          className={this.getListItemClasses(item)}>
          {position === 'bottom-left' || position === 'bottom-right' ?
            this.renderThumbItemTitle(item) : null}

          {orderChildren(item, i)}
        </li>
      );
    }.bind(this)));
  },

  renderItemMisc: function(item, type) {
    var Tag = type === 'date' ? 'span' : 'div';
    var className;

    switch (type) {
      case 'date':
        className = 'list-date';
        break;
      case 'desc':
        className = 'list-item-text';
        break;
      case 'mainAddition':
        className = 'list-news-addon';
        break;
      case 'thumbAddition':
        className = 'list-thumb-addon';
    }

    return item[type] ? (
      <Tag className={this.setClassNamespace(className)}>
        {item[type]}
      </Tag>
    ) : null;
  },

  renderItemThumb: function(item, i) {
    var cols = this.props.thumbPosition === 'top' ? 12 : 4;

    return item.img ? (<Col
      key={'thumb' + i}
      sm={cols}
      className={this.setClassNamespace('list-thumb')}>
      <a href={item.link}>
        <img src={item.img} alt={item.title}/>
      </a>
      {this.renderItemMisc(item, 'thumbAddition')}
    </Col>) : null;
  },

  renderItemMain: function(item, i) {
    var position = this.props.thumbPosition;
    var date = this.renderItemMisc(item, 'date');
    var desc = this.renderItemMisc(item, 'desc');
    var addon = this.renderItemMisc(item, 'mainAddition');
    // title of list without thumbnail
    var itemWithoutThumbTitle = !position && item.title ? (
      <a
        key={'title' + i}
        className={this.setClassNamespace('list-item-hd')}
        href={item.link}>
        {item.title}
      </a>
    ) : null;
    var cols = position === 'top' ? 12 : item.img ? 8 : 12;

    return position ? (
      <Col
        sm={cols}
        className={this.setClassNamespace('list-main')}
        key={'itemMain' + i}>
        {position !== 'bottom-left' && position !== 'bottom-right' ?
          this.renderThumbItemTitle(item) : null}
        {date}
        {desc}
        {addon}
      </Col>
    ) : [itemWithoutThumbTitle, date, desc, addon];
  },

  renderThumbItemTitle: function(item) {
    return item.title ? (
      <h3 className={this.setClassNamespace('list-item-hd')}>
        <a href={item.link}>
          {item.title}
        </a>
      </h3>
    ) : null;
  },

  render: function() {
    var classSet = this.getClassSet();

    return (
      <div
        {...this.props}
        data-am-widget={this.props.classPrefix}
        className={classNames(this.props.className, classSet)}>
        {this.props.header || this.renderHeader()}
        {this.renderBody(
            this.renderList()
        )}
        {this.props.footer || this.renderFooter()}
      </div>
    );
  }
});

module.exports = ListNews;
