'use strict';

var React = require('react');
var Link = require('react-router').Link;
var StateMixin = require('react-router').State;
var data = require('./data');

var Docs = {
  button: require('../button'),
  close: require('../close'),
  grid: require('../grid'),
  pagination: require('../pagination'),
  list: require('../list'),
  icon: require('../icon'),
  nav: require('../nav'),
  topbar: require('../topbar'),
  breadcrumb: require('../breadcrumb'),
  panel: require('../panel'),
  progress: require('../progress'),
  badge: require('../badge'),
  form: require('../form'),
  'avg-grid': require('../avggrid'),
  image: require('../image'),
  thumbnail: require('../thumbnail'),
  table: require('../table'),
  article: require('../article'),
  alert: require('../alert'),
  datetimepicker: require('../datetimepicker'),
  dropdown: require('../dropdown'),
  nprogress: require('../nprogress'),
  accordion: require('../accordion'),
  modal: require('../modal'),
  popover: require('../popover'),
  'smooth-scroll': require('../smooth-scroll'),
  scrollspy: require('../scrollspy'),
  scrollspynav: require('../scrollspynav'),
  sticky: require('../sticky'),
  selected: require('../selected'),
  slider: require('../slider'),
  tabs: require('../tabs'),
  divider: require('../divider'),
  footer: require('../footer'),
  gallery: require('../gallery'),
  header: require('../header'),
  'list-news': require('../list-news'),
  menu: require('../menu'),
  navbar: require('../navbar'),
  titlebar: require('../titlebar')
};

var EmptyComponent = React.createClass({
  render: function() {
    return false;
  }
});

var PageComponentsDoc = React.createClass({
  mixins: [StateMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function() {
    var component = this.getParams().component;
    var Doc = Docs[component] || EmptyComponent;

    return <Doc />;
  }
});

module.exports = PageComponentsDoc;
