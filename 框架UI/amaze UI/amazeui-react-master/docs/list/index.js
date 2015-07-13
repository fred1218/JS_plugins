'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  truncate: fs.readFileSync(__dirname + '/02-truncate.js', 'utf-8'),
  border: fs.readFileSync(__dirname + '/03-border.js', 'utf-8'),
  striped: fs.readFileSync(__dirname + '/04-striped.js', 'utf-8'),
  badge: fs.readFileSync(__dirname + '/05-badge.js', 'utf-8')
};

var ListDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>List</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />
        <h3>单行截取</h3>
        <p>实现单行截取在 <code>ListItem</code> 添加 <code>truncate</code> 属性</p>
        <ReactBin code={examples.truncate} />

        <h3>列表边框</h3>
        <ReactBin code={examples.border} />

        <h3>斑马纹</h3>
        <ReactBin code={examples.striped} />

        <h3>添加 Badge</h3>
        <ReactBin code={examples.badge} />
      </Doc>
    );
  }
});

module.exports = ListDoc;
