'use strict';

var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

var GoTop = require('../src/GoTop');
var production = require('./utils').isProduction;
var DocHeader = require('./zero/DocHeader');
var DocFooter = require('./zero/DocFooter');

var App = React.createClass({
  render: function() {
    return (
      <div className="amr-page">
        <DocHeader />
        <RouteHandler />
        <DocFooter />
        <GoTop theme="fixed" autoHide icon="arrow-up" />
      </div>
    );
  }
});

// Pages
var PageIndex = require('./zero/PageIndex');
var PageGettingStarted = require('./zero/PageGettingStarted');
var PageComponents = require('./zero/PageComponents');
var PageComponentsIndex = require('./zero/PageComponentsIndex');
var PageComponentsDoc = require('./zero/PageComponentsDoc');

var routes = (
  <Route name='app' path={production ? '/react/' : '/'} handler={App}>
    <Route name='getting-started' handler={PageGettingStarted} />
    <Route name='components' handler={PageComponents}>
      <Route name='component' path=':component' handler={PageComponentsDoc} />
      <DefaultRoute handler={PageComponentsIndex} />
    </Route>
    <DefaultRoute handler={PageIndex} />
  </Route>
);

document.addEventListener('DOMContentLoaded', function() {
  Router.run(routes, production ? Router.HistoryLocation : Router.HashLocation,
    function(Handler) {
    React.render(<Handler />, document.body);
  });
});
