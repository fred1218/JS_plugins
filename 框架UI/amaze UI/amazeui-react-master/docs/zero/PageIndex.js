'use strict';

var React = require('react');

var Link = require('react-router').Link;

var Grid = require('../../src/Grid');
var Col = require('../../src/Col');
var Container = require('../../src/Container');
var Icon = require('../../src/Icon');
var Button = require('../../src/Button');
var ButtonToolbar = require('../../src/ButtonToolbar');
var Main = require('./DocMain');
var assets = require('../utils').getAssetsPath();

module.exports = React.createClass({
  render: function() {
    return (
      <Main>
        <div className="amr-hero">
          <Container>
            <div className="amr-hero-cat">
              <img
                width="650"
                src={assets + 'i/mascot-react.png'}
                className="am-img-responsive"
                alt=""/>
            </div>
            <div className="amr-hero-intro">
              <h1>Amaze UI React</h1>
              <h2>基于 React.js 开发的 Web 组件库</h2>
              <ButtonToolbar>
                <Link
                  className="am-btn am-btn-secondary"
                  to="getting-started">
                  开始使用
                </Link>
                <Button
                  amStyle="default"
                  href="https://github.com/amazeui/amazeui-react"
                  target="_blank">
                  贡献代码
                  </Button>
              </ButtonToolbar>
            </div>
          </Container>
        </div>
        <Container className="amr-features">
          <Grid>
            <Col sm={12} md={6}>
              <Icon icon="paint-brush"/>

              <h2>专注 UI</h2>

              <p>只提供单纯的 UI(View)，对配套技术不做限定，可以在 Backbone、Angular、Meteor
                等框架中使用。</p>
            </Col>
            <Col sm={12} md={6}>
              <Icon icon="cubes"/>

              <h2>组件化，可复用、易扩展</h2>

              <p>基于 React 封装组件，不再疲于组织杂乱的 HTML 标签；组件可以按需组合、功能扩展方便。</p>
            </Col>
          </Grid>
          <Grid>
            <Col sm={12} md={6}>
              <Icon icon="server"/>

              <h2>高性能</h2>

              <p>React 所使用的 Virtual DOM 技术，能最大限度减少 DOM 操作，有效提高性能。</p>
            </Col>
            <Col sm={12} md={6}>
              <Icon icon="terminal"/>
              <h2>单向数据流</h2>
              <p>单向数据流可以简化操作，从 DOM 控制中解放出来，专注于业务逻辑。</p>
            </Col>
          </Grid>
        </Container>
      </Main>
    );
  }
});
