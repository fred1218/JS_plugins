'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  trigger: fs.readFileSync(__dirname + '/02-trigger.js', 'utf-8'),
  click: fs.readFileSync(__dirname + '/03-click.js', 'utf-8'),
  tooltip: fs.readFileSync(__dirname + '/04-tooltip.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Popover</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>渲染 Popover</h3>
        <ReactBin code={examples.default} />

        <h3>在 Trigger 上显示</h3>
        <ReactBin code={examples.trigger} />

        <h3>点击显示</h3>
        <ReactBin code={examples.click} />

        <h3>Tooltip 效果</h3>
        <ReactBin code={examples.tooltip} />
      </Doc>
    );
  }
});
