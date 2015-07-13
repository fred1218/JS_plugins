'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var utils = require('../utils');
var Markdown = utils.Markdown;
var Doc = utils.Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  slash: fs.readFileSync(__dirname + '/02-slash.js', 'utf-8'),
  icon: fs.readFileSync(__dirname + '/03-icon.js', 'utf-8')
};

var BreadcrumbDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Breadcrumb</h1>
        <hr />
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>默认分隔符</h3>
        <ReactBin code={examples.basic} />

        <h3>斜杆分隔符</h3>
        <ReactBin code={examples.slash} />

        <h3>结合 Icon</h3>
        <ReactBin code={examples.icon} />
      </Doc>
    );
  }
});

module.exports = BreadcrumbDoc;
