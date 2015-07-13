'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  style: fs.readFileSync(__dirname + '/02-style.js', 'utf-8'),
  size: fs.readFileSync(__dirname + '/03-size.js', 'utf-8'),
  striped: fs.readFileSync(__dirname + '/04-striped.js', 'utf-8'),
  active: fs.readFileSync(__dirname + '/05-active.js', 'utf-8'),
  stacked: fs.readFileSync(__dirname + '/06-stacked.js', 'utf-8')
};

var ProgressDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Progress</h1>
        <hr />
        <Markdown>{require('./01-intro.md')}</Markdown>

        <h2>基本样式</h2>
        <ReactBin code={examples.basic} />

        <h2>进度条颜色</h2>
        <ReactBin code={examples.style} />

        <h2>进度条高度</h2>
        <ReactBin code={examples.size} />

        <h2>进度条条纹</h2>
        <ReactBin code={examples.striped} />

        <h2>进度条动画</h2>
        <ReactBin code={examples.active} />

        <h2>进度条堆叠</h2>
        <ReactBin code={examples.stacked} />
      </Doc>
    );
  }
});



module.exports = ProgressDoc;

