'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  centered: fs.readFileSync(__dirname + '/02-centered.js', 'utf-8'),
  right: fs.readFileSync(__dirname + '/03-right.js', 'utf-8'),
  prevNext: fs.readFileSync(__dirname + '/04-prevNext.js', 'utf-8'),
  dataDefault: fs.readFileSync(__dirname + '/05-data.js', 'utf-8'),
  dataSelect: fs.readFileSync(__dirname + '/05-data-select.js', 'utf-8')
};

var PaginationDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Pagination</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>

        <h2>使用演示</h2>

        <h3>基本使用</h3>
        <ReactBin code={examples.basic}/>

        <h3>居中对齐：</h3>

        <p><code>Pagination</code> 默认为左对齐。</p>

        <p><code>Pagination</code> 上添加 <code>centered</code> 属性。</p>
        <ReactBin code={examples.centered}/>

        <h3>右对齐</h3>

        <p>在 <code>Pagination</code> 上添加 <code>right</code> 属性。</p>
        <ReactBin code={examples.right}/>

        <h3>左右分布</h3>

        <p>在 <code>PaginationItem</code> 添加 <code>prev</code> <code>next</code>
          属性。</p>
        <ReactBin code={examples.prevNext}/>

        <h3>使用数据渲染</h3>
        <Markdown>{require('./05-data.md')}</Markdown>

        <h4>样式 1</h4>
        <ReactBin code={examples.dataDefault}/>
        <h4>样式 2</h4>
        <ReactBin code={examples.dataSelect}/>
      </Doc>
    );
  }
});

module.exports = PaginationDoc;
