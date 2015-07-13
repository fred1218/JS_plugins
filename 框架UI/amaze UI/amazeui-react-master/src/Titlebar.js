'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var AvgGrid = require('./AvgGrid');
var omit = require('object.omit');

var Titlebar = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    classPrefix: React.PropTypes.string,
    theme: React.PropTypes.oneOf(['default', 'multi', 'cols']),
    nav: React.PropTypes.array,
    title: React.PropTypes.node
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'titlebar',
      theme: 'default',
      data: []
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var props = omit(this.props, ['classPrefix', 'nav', 'theme']);

    return (
      <div
        {...props}
        data-am-widget={this.props.classPrefix}
        className={classNames(this.props.className, classSet)}>
        <h2 className={this.prefixClass('title')}>
          {this.props.href ? (
            <a href={this.props.href}>
              {this.props.title}
            </a>
          ) : this.props.title}
        </h2>
        {this.props.nav ? (
          <nav className={this.prefixClass('nav')}>
            {this.props.nav.map(function(item, i) {
              return (
                <a href={item.link} key={i}>
                  {item.title}
                </a>);
            })}
          </nav>
        ) : null}
      </div>
    );
  }
});

module.exports = Titlebar;
