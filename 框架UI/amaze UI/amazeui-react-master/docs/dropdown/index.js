'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  dropup: fs.readFileSync(__dirname + '/02-dropup.js', 'utf-8'),
  content: fs.readFileSync(__dirname + '/03-content.js', 'utf-8')
};

var GridDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Dropdown</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认形式</h3>
        <ReactBin code={examples.basic} />

        <h3>颜色样式</h3>
        <ReactBin code={examples.dropup} />

        <h3>下拉内容</h3>
        <ReactBin code={examples.content} />
      </Doc>
    );
  }
});

module.exports = GridDoc;
