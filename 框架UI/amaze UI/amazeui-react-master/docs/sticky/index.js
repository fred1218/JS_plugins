'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  top: fs.readFileSync(__dirname + '/02-top.js', 'utf-8'),
  animation: fs.readFileSync(__dirname + '/03-animation.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>ScrollSpyNav</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <h3>默认设置</h3>
        <ReactBin code={examples.basic} />
        <h3>设置上边距</h3>
        <ReactBin code={examples.top} />
        <h3>动画效果</h3>
        <ReactBin code={examples.animation} />
        <p style={{height: 800}}>刷屏神器...</p>
      </Doc>
    );
  }
});
