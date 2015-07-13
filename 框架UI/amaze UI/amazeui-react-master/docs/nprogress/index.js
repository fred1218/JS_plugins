'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8')
};

var NProgerssDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>NProgress</h1>
        <hr/>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <ReactBin code={examples.basic} />
      </Doc>
    );
  }
});

module.exports = NProgerssDoc;
