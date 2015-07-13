'use strict';

var React = require('react');
var Icon = require('../../src/Icon');
var Grid = require('../../src/Grid');
var Col = require('../../src/Col');
var Modal = require('../../src/Modal');
var ModalTrigger = require('../../src/ModalTrigger');
var year = new Date().getFullYear();
var socails = [
  {
    name: 'qq',
    href: 'http://amazeui.org/about/contact'
  },
  {
    name: 'weibo',
    href: 'http://weibo.com/amazeui'
  },
  {
    name: 'wechat'
  },
  {
    name: 'github',
    href: 'https://github.com/amazeui/amazeui-react'
  }
];

var modal = (<Modal
  className="amr-wechat-modal">
  <img src="http://a.static.amazeui.org/assets/2.x/i/am/qr-ui.jpg" alt=""/>
  在微信上关注我们！
</Modal>);

var DocFooter = React.createClass({
  render: function() {
    return (
      <footer className="amr-footer">
        <Grid fixed>
          <Col md={4} mdPush={8}>
            <ul className="amr-footer-socials">
              {socails.map(function(s, i) {
                return (
                  <li key={i}>
                    {s.name === 'wechat' ? (
                      <ModalTrigger
                        modalWidth="300"
                        modal={modal}>
                        <Icon
                          button
                          icon={s.name} />
                      </ModalTrigger>
                    ) : (
                    <Icon
                      button
                      href={s.href || null}
                      target="_blank"
                      icon={s.name} />)
                    }
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col md={8} mdPull={4}>
            <h2 className="amr-footer-fd">
              <a href="http://www.yunshipei.com" target="_blank">云适配</a>
            </h2>
            <p className="amr-cp">© {year} AllMobilize, Inc. Licensed under <a href="http://opensource.org/licenses/MIT" target="_blank">MIT license</a>. Developed with <a href="http://www.jetbrains.com/webstorm/" target="_blank">WebStorm</a>.</p>
          </Col>
        </Grid>
      </footer>
    );
  }
});

module.exports = DocFooter;
