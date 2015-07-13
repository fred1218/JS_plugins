'use strict';

var React = require('react');
var Container = require('../../src/Container');

var DocMain = React.createClass({
  render: function() {
    return (
      <main className="amr-main">
        {this.props.children}
      </main>
    );
  }

});

module.exports = DocMain;
