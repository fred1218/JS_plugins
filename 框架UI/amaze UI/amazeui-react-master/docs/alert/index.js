'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  styles: fs.readFileSync(__dirname + '/02-styles.js', 'utf-8'),
  closeAble: fs.readFileSync(__dirname + '/03-closeable.js', 'utf-8')
};

var GridDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Alert</h1>
        <hr/>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>基本使用</h2>
        <h3>默认样式</h3>
        <ReactBin code={examples.basic} />

        <h3>颜色样式</h3>
        <ReactBin code={examples.styles} />

        <h2>交互功能</h2>
        <h3>可关闭警告框</h3>
        <ReactBin code={examples.closeAble} />

        <p>TODO: 增加交互示例</p>
      </Doc>
    );
  }
});

module.exports = GridDoc;
