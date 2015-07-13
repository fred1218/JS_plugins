'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  title: fs.readFileSync(__dirname + '/02-title.js', 'utf-8'),
  text: fs.readFileSync(__dirname + '/03-text.js', 'utf-8'),
  thumbnails: fs.readFileSync(__dirname + '/04-thumbnails.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Thumbnail</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>

        <h3>基本演示</h3>
        <ReactBin code={examples.basic} />

        <h3>标题</h3>
        <ReactBin code={examples.title} />

        <h3>标题</h3>
        <ReactBin code={examples.text} />

        <h3>Thumbnails</h3>
        <ReactBin code={examples.thumbnails} />
      </Doc>
    );
  }
});
