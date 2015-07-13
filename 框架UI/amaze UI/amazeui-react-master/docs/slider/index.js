'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  defaultThumb: fs.readFileSync(__dirname + '/01-default-thumb.js', 'utf-8'),
  defaultTitle: fs.readFileSync(__dirname + '/01-default-title.js', 'utf-8'),
  a: fs.readFileSync(__dirname + '/02-a.js', 'utf-8'),
  b: fs.readFileSync(__dirname + '/03-b.js', 'utf-8'),
  c: fs.readFileSync(__dirname + '/04-c.js', 'utf-8'),
  d1: fs.readFileSync(__dirname + '/05-d1.js', 'utf-8'),
  d2: fs.readFileSync(__dirname + '/05-d2.js', 'utf-8'),
  d3: fs.readFileSync(__dirname + '/05-d3.js', 'utf-8')
};

var SliderDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Slider</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认主题</h3>
        <h4>常规模式</h4>
        <ReactBin code={examples.default} />

        <h4>缩略图模式</h4>
        <ReactBin code={examples.defaultThumb} />

        <h4>显示标题</h4>
        <ReactBin code={examples.defaultTitle} />

        <h3>a 系列主题</h3>
        <ReactBin code={examples.a} />

        <h3>b 系列主题</h3>
        <ReactBin code={examples.b} />

        <h3>c 系列主题</h3>
        <ReactBin code={examples.c} />

        <h3>d 系列主题</h3>
        <h4>d1 主题</h4>
        <ReactBin code={examples.d1} />

        <h4>d2 主题</h4>
        <ReactBin code={examples.d2} />

        <h4>d3 主题</h4>
        <ReactBin code={examples.d3} />
      </Doc>
    );
  }
});

module.exports = SliderDoc;
