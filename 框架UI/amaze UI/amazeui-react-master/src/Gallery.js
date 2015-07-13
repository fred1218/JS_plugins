'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var AvgGrid = require('./AvgGrid');
var omit = require('object.omit');

var Gallery = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default', 'overlay', 'bordered',
      'imgbordered']),
    data: React.PropTypes.array,
    sm: React.PropTypes.number,
    md: React.PropTypes.number,
    lg: React.PropTypes.number
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'gallery',
      theme: 'default',
      data: []
    };
  },

  renderItem: function(item) {
    var img = item.img ? (
      <img
        src={item.img}
        key="galeryImg"
        alt={item.alt || item.title || null}/>
    ) : null;
    var title = item.title ? (
      <h3
        key="galleryTitle"
        className={this.prefixClass('title')}>
        {item.title}
      </h3>) : null;
    var desc = item.desc ? (
      <div
        key="galleryDesc"
        className={this.prefixClass('desc')}>
        {item.desc}
      </div>
    ) : null;
    var galleryItem = item.link ? (
      <a href={item.link}>
        {img}
        {title}
        {desc}
      </a>
    ) : [img, title, desc];

    return (
      <div
        className={classNames(this.props.className, this.prefixClass('item'))}>
        {galleryItem}
      </div>
    );
  },

  render: function() {
    var classSet = this.getClassSet();
    var props = omit(this.props, ['classPrefix', 'data', 'theme']);

    return (
      <AvgGrid
        {...props}
        sm={this.props.sm || 2}
        md={this.props.md || 3}
        lg={this.props.lg || 4}
        data-am-widget={this.props.classPrefix}
        className={classNames(this.props.className, classSet)}>
        {this.props.data.map(function(item, i) {
          return (
            <li key={i}>
              {this.renderItem(item)}
            </li>
          );
        }.bind(this))}
      </AvgGrid>
    );
  }
});

module.exports = Gallery;
