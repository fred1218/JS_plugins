'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  desc: fs.readFileSync(__dirname + '/02-desc.js', 'utf-8'),
  thumbTop: fs.readFileSync(__dirname + '/03-thumb-top.js', 'utf-8'),
  thumbLeft: fs.readFileSync(__dirname + '/04-thumb-left.js', 'utf-8'),
  thumbBottom: fs.readFileSync(__dirname + '/05-thumb-bottm.js', 'utf-8'),
  withTitlebar: fs.readFileSync(__dirname + '/06-with-titlebar.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>ListNews</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认主题</h3>
        <h4>标题 + 日期</h4>
        <ReactBin code={examples.default} />

        <h4>标题 + 摘要</h4>
        <ReactBin code={examples.desc} />

        <h4>缩略图在顶部</h4>
        <ReactBin code={examples.thumbTop} />

        <h4>缩略图在两侧</h4>
        <ReactBin code={examples.thumbLeft} />

        <h4>缩略图底部</h4>
        <ReactBin code={examples.thumbBottom} />

        <h4>结合 Titlebar</h4>
        <ReactBin code={examples.withTitlebar} />
      </Doc>
    );
  }
});
