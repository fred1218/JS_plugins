'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  multiple: fs.readFileSync(__dirname + '/02-multiple.js', 'utf-8'),
  group: fs.readFileSync(__dirname + '/03-group.js', 'utf-8'),
  searchBox: fs.readFileSync(__dirname + '/04-searchbox.js', 'utf-8'),
  formSubmit: fs.readFileSync(__dirname + '/05-in-form.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Selected</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <h3>单选</h3>
        <ReactBin code={examples.basic} />
        <h3>多选</h3>
        <ReactBin code={examples.multiple} />
        <h3>选项分组</h3>
        <ReactBin code={examples.group} />
        <h3>搜索过滤框</h3>
        <ReactBin code={examples.searchBox} />
        <h3>表单提交测试</h3>
        <ReactBin code={examples.formSubmit} />
      </Doc>
    );
  }
});
