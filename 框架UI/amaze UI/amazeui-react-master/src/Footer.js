'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var Footer = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    theme: React.PropTypes.oneOf(['default']),
    classPrefix: React.PropTypes.string,
    mobileTitle: React.PropTypes.string,
    mobileLink: React.PropTypes.string,
    desktopTitle: React.PropTypes.string,
    desktopLink: React.PropTypes.string,
    onRequestMobile: React.PropTypes.func,
    onRequestDesktop: React.PropTypes.func,
    data: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'footer',
      theme: 'default',
      mobileTitle: '适配版',
      desktopTitle: '电脑版'
    };
  },

  render: function() {
    var classSet = this.getClassSet();
    var MobileTag = this.props.mobileLink ? 'a' : 'span';

    return (
      <footer
        {...this.props}
        data-am-widget={this.props.classPrefix}
        className={classNames(this.props.className, classSet)}>
        <div className={this.prefixClass('switch')}>
          <MobileTag
            className={this.prefixClass('ysp')}
            onClick={this.props.onRequestMobile}
            href={this.props.mobileLink}
            data-rel="mobile">
            {this.props.mobileTitle}
          </MobileTag>
          <span className={this.prefixClass('divider')}>|</span>
          <a
            data-rel="desktop"
            href={this.props.desktopLink}
            onClick={this.props.onRequestDesktop}
            className={this.prefixClass('desktop')}>
            {this.props.desktopTitle}
          </a>
        </div>
        <div className={this.prefixClass('miscs')}>
          {this.props.data ? (
            this.props.data.map(function(item, i) {
              return (
                <p key={i}>{item}</p>
              );
            })
          ) : this.props.children}
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
