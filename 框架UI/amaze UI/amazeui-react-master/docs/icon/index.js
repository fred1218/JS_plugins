'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  buttonStyle: fs.readFileSync(__dirname + '/02-button-style.js', 'utf-8'),
  size: fs.readFileSync(__dirname + '/03-size.js', 'utf-8'),
  spin: fs.readFileSync(__dirname + '/04-spin.js', 'utf-8'),
  fw: fs.readFileSync(__dirname + '/05-fw.js', 'utf-8'),
  anchor: fs.readFileSync(__dirname + '/06-anchor.js', 'utf-8')
};

var IconDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Icon</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />

        <h3>图标大小</h3>
        <ReactBin code={examples.size} />

        <h3>图标按钮</h3>
        <p>添加 `button` 属性将图标显示为按钮样式。</p>
        <p>通过 <code>amStyle</code> 可以设置按钮图标的颜色。</p>
        <ul>
          <li><code>primary</code></li>
          <li><code>secondary</code></li>
          <li><code>success</code></li>
          <li><code>warning</code></li>
          <li><code>danger</code></li>
        </ul>
        <ReactBin code={examples.buttonStyle} />

        <h3>旋转动画</h3>
        <ReactBin code={examples.spin} />

        <h3>固定宽度</h3>
        <ReactBin code={examples.fw} />

        <h3>添加链接</h3>
        <ReactBin code={examples.anchor} />
      </Doc>
    );
  }
});

module.exports = IconDoc;
