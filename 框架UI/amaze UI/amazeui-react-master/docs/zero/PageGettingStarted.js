'use strict';

var React = require('react');
var Container = require('../../src/Container');
var Banner = require('./DocBanner');
var Main = require('./DocMain');
var Markdown = require('../utils').Markdown;

var GettingStarted = React.createClass({
  render: function() {
    return (
      <Main>
        <Banner title="开始使用">
          使用之前整体了解一下 Amaze UI React
        </Banner>
        <Container className="amr-content">
          <Markdown doc>{require('./getting-strarted.md')}</Markdown>
        </Container>
      </Main>
    );
  }
});

module.exports = GettingStarted;
