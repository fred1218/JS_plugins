'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  bordered: fs.readFileSync(__dirname + '/02-bordered.js', 'utf-8'),
  compact: fs.readFileSync(__dirname + '/03-compact.js', 'utf-8'),
  responsive: fs.readFileSync(__dirname + '/04-responsive.js', 'utf-8'),
  jsonTable: fs.readFileSync(__dirname + '/05-json-table.js', 'utf-8')
};

var TableDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Table</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />
        <h3>属性叠加</h3>
        <ReactBin code={examples.bordered} />
        <h3>紧凑型表格</h3>
        <ReactBin code={examples.compact} />
        <h3>响应式</h3>
        <p>窗口小到一定程度以后表格可以左右滑动。</p>
        <ReactBin code={examples.responsive} />

        <h2>进阶使用</h2>

        <h3>JSON to Table</h3>
        <ReactBin code={examples.jsonTable} />

        <h3>参考资源</h3>
        <Markdown>{require('./06-reference.md')}</Markdown>

      </Doc>
    );
  }
});

module.exports = TableDoc;
