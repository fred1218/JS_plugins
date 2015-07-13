'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basicGrid: fs.readFileSync(__dirname + '/01-basic-grid.js', 'utf-8'),
  responsiveGrid: fs.readFileSync(__dirname + '/02-responsive-grid.js', 'utf-8'),
  fixedGrid: fs.readFileSync(__dirname + '/03-fixed-grid.js', 'utf-8'),
  container: fs.readFileSync(__dirname + '/04-fullwidth-col.js', 'utf-8'),
  rows: fs.readFileSync(__dirname + '/05-rows.js', 'utf-8'),
  endProp: fs.readFileSync(__dirname + '/06-end-prop.js', 'utf-8'),
  colOffset: fs.readFileSync(__dirname + '/07-col-offset.js', 'utf-8'),
  centered: fs.readFileSync(__dirname + '/08-centered.js', 'utf-8'),
  pushPull: fs.readFileSync(__dirname + '/09-push-pull.js', 'utf-8'),
  collapse: fs.readFileSync(__dirname + '/10-collapse.js', 'utf-8')
};

var GridDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Grid</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>基础使用演示</h2>
        <h3>基本使用</h3>
        <p><strong>示例 1：一个基本网格</strong></p>
        <p>第一列占 4 份、第二列占 8 份 的网格。</p>
        <ReactBin code={examples.basicGrid} />
        <p><strong>示例 2：响应式网格</strong></p>
        <ReactBin code={examples.responsiveGrid} />
        <h3>限制行的宽度</h3>
        <p><strong>示例 3： 添加 <code>fixed</code> 属性限制宽度</strong></p>
        <ReactBin code={examples.fixedGrid} />

        <h3>容器</h3>
        <p>容器用来放置全宽的内容，避免没有必要的标签嵌套。</p>
        <p>示例4：使用容器</p>
        <ReactBin code={examples.container} />

        <h3>多行网格</h3>
        <p><strong>示例 5： 多行</strong></p>
        <ReactBin code={examples.rows} />

        <h3>不足 12 列的网格</h3>
        <p><strong>示例6：<code>end</code> 属性</strong></p>
        <ReactBin code={examples.endProp} />

        <h2>进阶使用</h2>

        <h3>列边距</h3>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <ReactBin code={examples.colOffset} />

        <h3>居中的列</h3>
        <p>使用 <code>xxCentered</code> 和 <code>xxUnCentered</code> 属性。</p>
        <ReactBin code={examples.centered} />

        <h3>Push/Pull</h3>
        <p><strong>示例 9：Push/Pull 实现结构与表现调整</strong></p>
        <ReactBin code={examples.pushPull} />

        <h3>移除列边距</h3>
        <p><strong>示例 10：使用 <code>collapse</code> 属性移除列边距</strong></p>
        <ReactBin code={examples.collapse} />
      </Doc>
    );
  }
});

module.exports = GridDoc;
