'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  data: fs.readFileSync(__dirname + '/02-data.js', 'utf-8')
};

module.exports = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Footer</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>组件演示</h2>
        <h3>以 children 形式设置数据</h3>
        <ReactBin code={examples.default} />

        <h3>以 data 属性设置数据</h3>
        <ReactBin code={examples.data} />
      </Doc>
    );
  }
});
