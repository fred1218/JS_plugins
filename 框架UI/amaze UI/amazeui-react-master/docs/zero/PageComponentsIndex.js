'use strict';

var React = require('react');
var Markdown = require('../utils').Markdown;

var PageComponentsIndex = React.createClass({
  render: function() {
    return (
      <Markdown doc>
        {require('./components.md')}
      </Markdown>
    );
  }
});

module.exports = PageComponentsIndex;
