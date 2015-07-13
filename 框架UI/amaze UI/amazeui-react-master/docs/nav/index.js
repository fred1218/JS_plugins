'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  pills: fs.readFileSync(__dirname + '/02-pills.js', 'utf-8'),
  tabs: fs.readFileSync(__dirname + '/03-tabs.js', 'utf-8'),
  justify: fs.readFileSync(__dirname + '/04-justify.js', 'utf-8'),
  state: fs.readFileSync(__dirname + '/05-state.js', 'utf-8'),
  subItem: fs.readFileSync(__dirname + '/06-sub-item.js', 'utf-8')
};

var NavDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Nav</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>

        <h2>组件演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />

        <h3>水平导航</h3>
        <ReactBin code={examples.pills} />

        <h3>标签式导航</h3>
        <ReactBin code={examples.tabs} />

        <h3>宽度自适应</h3>
        <ReactBin code={examples.justify} />

        <h3>导航状态</h3>
        <ReactBin code={examples.state} />

        <h3>导航标题及分隔线</h3>
        <ReactBin code={examples.subItem} />
      </Doc>
    );
  }
});

module.exports = NavDoc;
