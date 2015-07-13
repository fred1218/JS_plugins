'use strict';

var React = require('react');

if (!React) {
  throw new Error('AMUIReact requires React.');
}

module.exports = {
  VERSION: '__VERSION__',

  // layout
  Grid: require('./Grid'),
  Col: require('./Col'),
  Container: require('./Container'),
  AvgGrid: require('./AvgGrid'),

  // elements
  Button: require('./Button'),
  ButtonToolbar: require('./ButtonToolbar'),
  ButtonCheck: require('./ButtonCheck'),
  ButtonGroup: require('./ButtonGroup'),

  // form related
  Form: require('./Form'),
  FormGroup: require('./FormGroup'),
  FormFile: require('./FormFile'),
  Input: require('./Input'),
  UCheck: require('./UCheck'),

  Image: require('./Image'),
  Thumbnail: require('./Thumbnail'),
  Thumbnails: require('./Thumbnails'),
  Table: require('./Table'),
  // Code: require('./Code'),

  // Navs
  Nav: require('./Nav'),
  NavItem: require('./NavItem'),
  Breadcrumb: require('./Breadcrumb'),
  Pagination: require('./Pagination'),
  Topbar: require('./Topbar'),
  Tabs: require('./Tabs'),
  CollapsibleNav: require('./CollapsibleNav'),

  Article: require('./Article'),
  Badge: require('./Badge'),
  Close: require('./Close'),
  Icon: require('./Icon'),
  List: require('./List'),
  ListItem: require('./ListItem'),
  Panel: require('./Panel'),
  PanelGroup: require('./PanelGroup'),
  Progress: require('./Progress'),

  Alert: require('./Alert'),
  Date: require('./DatePicker'),
  DateTimeInput: require('./DateTimeInput'),
  DateTimePicker: require('./DateTimePicker'),
  TimePicker: require('./TimePicker'),
  Dropdown: require('./Dropdown'),
  Modal: require('./Modal'),
  ModalTrigger: require('./ModalTrigger'),
  Popover: require('./Popover'),
  PopoverTrigger: require('./PopoverTrigger'),
  NProgress: require('./NProgress'),
  ScrollSpy: require('./ScrollSpy'),
  ScrollSpyNav: require('./ScrollSpyNav'),
  Selected: require('./Selected'),
  Slider: require('./Slider'),
  Sticky: require('./Sticky'),

  // widgets
  Accordion: require('./Accordion'),
  Divider: require('./Divider'),
  Footer: require('./Footer'),
  Gallery: require('./Gallery'),
  GoTop: require('./GoTop'),
  Header: require('./Header'),
  ListNews: require('./ListNews'),
  Menu: require('./Menu'),
  Navbar: require('./Navbar'),
  Titlebar: require('./Titlebar'),

  // mixins
  mixins: require('./mixins')
};
