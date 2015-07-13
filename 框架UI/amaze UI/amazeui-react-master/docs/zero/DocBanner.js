'use strict';

var React = require('react');
var Container = require('../../src/Container');

var DocBanner = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function() {
    return (
      <div className="amr-banner">
        <Container>
          <h1>{this.props.title}</h1>
          {this.props.children ? (
            <p>{this.props.children}</p>
          ) : null}
        </Container>
      </div>
    );
  }

});

module.exports = DocBanner;
