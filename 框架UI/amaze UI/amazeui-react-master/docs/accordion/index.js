'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  others: fs.readFileSync(__dirname + '/02-others.js', 'utf-8')
};

var AccordionDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Accordion</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认主题</h3>
        <ReactBin code={examples.default} />

        <h3>其他主题</h3>
        <ReactBin code={examples.others} />
      </Doc>
    );
  }
});

module.exports = AccordionDoc;
