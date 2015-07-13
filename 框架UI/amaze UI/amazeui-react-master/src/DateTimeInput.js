'use strict';

var React = require('react');
var fecha = require('fecha');
var Events = require('./utils/Events');
var isNodeInTree = require('./utils/isNodeInTree');
var Input = require('./Input');
var DateTimePicker = require('./DateTimePicker');

var DateTimeInput = React.createClass({
  propTypes: {
    format: React.PropTypes.string,
    dateTime: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      dateTime: '',
      format: 'YYYY-MM-DD HH:mm'
    };
  },

  getInitialState: function() {
    return {
      value: this.props.dateTime || fecha.format(new Date(), this.props.format),
      showPicker: false
    };
  },

  handleOuterClick: function(event) {
    var picker = React.findDOMNode(this.refs.DateTimePicker.getDOMNode());

    if (!isNodeInTree(event.target, picker)) {
      this.handleClose();
    }
  },

  bindOuterHandlers: function() {
    Events.on(document, 'click', this.handleOuterClick);
  },

  unbindOuterHandlers: function() {
    Events.off(document, 'click', this.handleOuterClick);
  },

  handleClose: function() {
    this.unbindOuterHandlers();
    return this.setState({
      showPicker: false
    });
  },

  handleClick: function() {
    this.bindOuterHandlers();
    var posObj = this.refs.dateInput.getDOMNode();

    var offset = {
      top: posObj.offsetTop + posObj.offsetHeight,
      left: posObj.offsetLeft
    };

    var styles = {
      display: 'block',
      top: offset.top,
      left: offset.left,
      position: 'absolute',
      zIndex: 1120
    };

    this.setState({
      showPicker: true,
      pickerStyle: styles
    });
  },

  handleChange: function(event) {
    return this.setState({
      value: event.target.value
    });
  },

  handleSelect: function(date) {
    return this.setState({
      value: date
    });
  },

  renderPicker: function() {
    if (this.state.showPicker) {
      return (
        <DateTimePicker
          style={this.state.pickerStyle}
          ref="DateTimePicker"
          showDatePicker={this.props.showDatePicker}
          showTimePicker={this.props.showTimePicker}
          onSelect={this.handleSelect}
          onClose={this.handleClose}
          amStyle={this.props.amStyle}
          dateTime={this.state.value}
          viewMode={this.props.viewMode}
          minViewMode={this.props.minViewMode}
          daysOfWeekDisabled={this.props.daysOfWeekDisabled}
          weekStart={this.props.weekStart}
          format={this.props.format}
          locale={this.props.locale}
          maxDate={this.props.maxDate}
          minDate={this.props.minDate} />
      );
    }
  },

  render: function() {
    return (
      <div>
        <Input
          {...this.props}
          type="text"
          onClick={this.handleClick}
          value={this.state.value}
          onChange={this.handleChange}
          ref="dateInput" />
        {this.renderPicker()}
      </div>
    );
  }
});

module.exports = DateTimeInput;

// TODO: 动画
