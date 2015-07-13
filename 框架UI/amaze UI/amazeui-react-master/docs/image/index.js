'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  radius: fs.readFileSync(__dirname + '/02-radius.js', 'utf-8'),
  thumbnail: fs.readFileSync(__dirname + '/03-thumbnail.js', 'utf-8')
};

var GridDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Image</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <h3>响应式</h3>
        <ReactBin code={examples.basic} />

        <h3>图片形状</h3>
        <ReactBin code={examples.radius} />

        <h3>缩略图样式</h3>
        <ReactBin code={examples.thumbnail} />
      </Doc>
    );
  }
});

module.exports = GridDoc;
