'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8')
};

var NavDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Topbar</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>

        <h2>组件演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />
      </Doc>
    );
  }
});

module.exports = NavDoc;
