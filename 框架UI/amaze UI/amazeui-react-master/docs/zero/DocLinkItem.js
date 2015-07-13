'use strict';

var React = require('react');
var Link = require('react-router').Link;
var State = require('react-router').State;

var LinkItem = React.createClass({
  mixins: [State],

  render: function() {
    var isActive = this.isActive(this.props.to, this.props.params,
      this.props.query);
    var activeClassName = isActive ? 'am-active' : '';
    var link = (
      <Link {...this.props} />
    );

    return <li className={activeClassName}>{link}</li>;
  }
});

module.exports = LinkItem;
