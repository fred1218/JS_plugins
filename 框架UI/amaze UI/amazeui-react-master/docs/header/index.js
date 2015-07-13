'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  customIcon: fs.readFileSync(__dirname + '/01-default-customicon.js', 'utf-8'),
  iconText: fs.readFileSync(__dirname + '/01-default-icontext.js', 'utf-8'),
  multIcon: fs.readFileSync(__dirname + '/01-default-multicon.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Header</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认主题</h3>
        <h4>Icon 图标</h4>
        <ReactBin code={examples.default} />
        <h4>图片图标</h4>
        <ReactBin code={examples.customIcon} />
        <h4>图标 + 文字</h4>
        <ReactBin code={examples.iconText} />
        <h4>多个图标</h4>
        <ReactBin code={examples.multIcon} />
      </Doc>
    );
  }
});
