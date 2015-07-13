'use strict';

var React = require('react');
var classnames = require('classnames');

exports.Markdown = React.createClass({
  propTypes: {
    doc: React.PropTypes.bool
  },

  // TODO:
  //   1. render markdown
  //   2. highlight code
  render: function() {
    var Tag = this.props.doc ? exports.Doc : 'div';

    return (
      <Tag
        dangerouslySetInnerHTML={{__html: this.props.children}}
        className={this.props.className || null} />
    );
  }
});

exports.Doc = React.createClass({
  render: function() {
    return (
      <div {...this.props}
        className={classnames('doc-content', this.props.className)}>
        {this.props.children}
      </div>
    );
  }
});

exports.getAssetsPath = function() {
  return '';
};

exports.isProduction = process.env.NODE_ENV === 'production';
