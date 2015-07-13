'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  responsive: fs.readFileSync(__dirname + '/02-responsive.js', 'utf-8')
};

var GridDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Avg Grid</h1>
        <hr/>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>设置一个区间</h2>
        <ReactBin code={examples.basic} />

        <h2>响应式</h2>
        <ReactBin code={examples.responsive} />
      </Doc>
    );
  }
});

module.exports = GridDoc;
