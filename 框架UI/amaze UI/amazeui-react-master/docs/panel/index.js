'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  header: fs.readFileSync(__dirname + '/02-header.js', 'utf-8'),
  footer: fs.readFileSync(__dirname + '/03-footer.js', 'utf-8'),
  style: fs.readFileSync(__dirname + '/04-style.js', 'utf-8'),
  table: fs.readFileSync(__dirname + '/05-table.js', 'utf-8'),
  list: fs.readFileSync(__dirname + '/06-list.js', 'utf-8'),
  group: fs.readFileSync(__dirname + '/07-group.js', 'utf-8'),
  collapsible: fs.readFileSync(__dirname + '/08-collapsible.js', 'utf-8'),
  cg: fs.readFileSync(__dirname + '/09-controlled-group.js', 'utf-8'),
  ucg: fs.readFileSync(__dirname + '/10-uncontrolled-group.js', 'utf-8')
};

var PanelDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Panel</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>

        <h2>组件演示</h2>
        <ReactBin code={examples.basic} />

        <h3>带标题的面板</h3>
        <ReactBin code={examples.header} />

        <h3>面板页脚</h3>
        <ReactBin code={examples.footer} />

        <h2>面板颜色</h2>
        <ReactBin code={examples.style} />

        <h2>组合使用</h2>
        <h3>面板嵌套表格</h3>
        <ReactBin code={examples.table} />

        <h3>面板嵌套列表</h3>
        <ReactBin code={examples.list} />

        <h2>面板组演示</h2>
        <ReactBin code={examples.group} />
        <h3>可折叠面板</h3>
        <ReactBin code={examples.collapsible} />

        <h3>可折叠面板组</h3>
        <ReactBin code={examples.ucg} />

        <h3>受控的面板组</h3>
        <ReactBin code={examples.cg} />
      </Doc>
    );
  }
});

module.exports = PanelDoc;
