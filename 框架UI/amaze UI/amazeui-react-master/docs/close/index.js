'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  alt: fs.readFileSync(__dirname + '/02-alt.js', 'utf-8'),
  spin: fs.readFileSync(__dirname + '/03-spin.js', 'utf-8')
};

var CloseDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Close</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />

        <h3>带边框样式</h3>
        <p>添加 <code>alt</code> 属性。</p>
        <ReactBin code={examples.alt} />

        <h3>hover 旋转</h3>
        <p>添加 <code>spin</code> 属性。</p>
        <ReactBin code={examples.spin} />
      </Doc>
    );
  }
});

module.exports = CloseDoc;
