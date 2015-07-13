'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  round: fs.readFileSync(__dirname + '/02-round.js', 'utf-8'),
  radius: fs.readFileSync(__dirname + '/03-radius.js', 'utf-8'),
  size: fs.readFileSync(__dirname + '/04-size.js', 'utf-8')
};

var BadgeDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Badge</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>

        <h3>默认样式</h3>
        <ReactBin code={examples.basic} />

        <h3>圆角样式</h3>
        <ReactBin code={examples.round} />

        <h3>椭圆样式</h3>
        <ReactBin code={examples.radius} />

        <h3>大小</h3>
        <ReactBin code={examples.size} />
      </Doc>
    );
  }
});

module.exports = BadgeDoc;
