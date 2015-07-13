'use strict';

var React = require('react');
var Container = require('../../src/Container');
var Button = require('../../src/Button');
var Icon = require('../../src/Icon');
var Nav = require('../../src/Nav');
var Badge = require('../../src/Badge');
var LinkItem = require('./DocLinkItem');
var links = [
  {
    title: '开始使用',
    name: 'getting-started'
  },
  {
    title: '组件',
    name: 'components'
  }
];

var DocHeader = React.createClass({
  getInitialState: function() {
    return {
      menuActive: false
    };
  },

  handleClick: function(e) {
    e.preventDefault();
    this.setState({
      menuActive: !this.state.menuActive
    });
  },

  render: function() {
    var linkElements = links.map(function(link) {
      return <LinkItem key={link.name} to={link.name}>{link.title}</LinkItem>;
    });
    var menuClass = this.state.menuActive ? ' am-in' : '';

    return (
      <header className="am-topbar am-topbar-inverse amr-header">
        <Container>
          <h1 className="am-topbar-brand">
            <a
              href="./"
              className="am-text-ir">
              Amaze UI React
            </a>
            <Badge amStyle="warning">React</Badge>
          </h1>
          <Button
            onClick={this.handleClick}
            className="am-show-sm-only am-topbar-btn am-topbar-toggle"
            amSize="sm" amStyle="secondary">
            <span className="am-sr-only">导航切换</span>
            <Icon icon="bars" />
          </Button>

          <div
            className={'am-collapse am-topbar-collapse' + menuClass} >
            <Nav pills topbar>
              {linkElements}
              <li><a href="http://amazeui.org" target="_blank">jQuery 版</a></li>
            </Nav>
          </div>
        </Container>
      </header>
    );
  }
});

module.exports = DocHeader;
