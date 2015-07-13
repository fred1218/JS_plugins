'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>ScrollSpy</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <h3>各动画效果演示</h3>
        <ReactBin code={examples.basic} />
      </Doc>
    );
  }
});
