'use strict';

var React = require('react');
var classNames = require('classnames');
var ClassNameMixin = require('./mixins/ClassNameMixin');

var TimePicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    onSelect: React.PropTypes.func.isRequired,
    date: React.PropTypes.object,
    format: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker',
      format: 'HH:mm'
    };
  },

  getInitialState: function() {
    return {
      viewDate: this.props.date,
      selectedDate: this.props.date,
      displayed: {
        times: {display: 'block'},
        minutes: {display: 'none'},
        hours: {display: 'none'}
      }
    };
  },

  // Minutes
  addMinute: function() {
    var viewDate = this.state.viewDate;

    viewDate.setMinutes(viewDate.getMinutes() + 1);

    this.setTime(viewDate);
  },

  subtractMinute: function() {
    var viewDate = this.state.viewDate;

    viewDate.setMinutes(viewDate.getMinutes() - 1);

    this.setTime(viewDate);
  },

  setTime: function(viewDate) {
    this.setState({
      viewDate: viewDate,
      selectedDate: new Date(viewDate.valueOf())
    }, function() {
      this.props.onSelect(this.state.selectedDate);
    });
  },

  // set Minutes
  setSelectedMinute: function(event) {
    var viewDate = this.state.viewDate;
    var minute = parseInt(event.target.innerHTML.substr(3));

    viewDate.setMinutes(minute);
    this.setTime(viewDate);

    this.setState({
      displayed: {
        times: {display: 'block'},
        minutes: {display: 'none'},
        hours: {display: 'none'}
      }
    });
  },

  showMinutes: function() {
    this.setState({
      displayed: {
        times: {display: 'none'},
        minutes: {display: 'block'},
        hours: {display: 'none'}
      }
    });
  },

  // Hours
  showHours: function() {
    this.setState({
      displayed: {
        times: {display: 'none'},
        minutes: {display: 'none'},
        hours: {display: 'block'}
      }
    });
  },

  setSelectedHour: function(event) {
    var viewDate = this.state.viewDate;
    var hour = parseInt(event.target.innerHTML);

    viewDate.setHours(hour);
    this.setTime(viewDate);

    this.setState({
      displayed: {
        times: {display: 'block'},
        minutes: {display: 'none'},
        hours: {display: 'none'}
      }
    });
  },

  addHour: function() {
    var viewDate = this.state.viewDate;

    viewDate.setHours(viewDate.getHours() + 1);

    this.setTime(viewDate);
  },

  subtractHour: function() {
    var viewDate = this.state.viewDate;

    viewDate.setHours(viewDate.getHours() - 1);

    this.setTime(viewDate);
  },

  showTimeText: function() {
    var hour = this.state.viewDate.getHours();
    var minute = this.state.viewDate.getMinutes();

    if (minute < 10) {
      minute = '0' + minute;
    }

    if (hour < 10) {
      hour = '0' + hour;
    }

    return {
      hour: hour,
      minute: minute
    };
  },

  renderHours: function() {
    var time = this.showTimeText().hour + ':' + this.showTimeText().minute;

    return (
      <HoursPicker
        style={this.state.displayed.hours}
        setSelectedHour={this.setSelectedHour}
        selectedDate={this.state.selectedDate}
        addHour={this.addHour}
        subtractHour={this.subtractHour}
        showTime={time} />
    );
  },

  renderMinutes: function() {
    var time = this.showTimeText().hour + ':' + this.showTimeText().minute;

    return (
      <MinutesPicker
        style={this.state.displayed.minutes}
        setSelectedMinute={this.setSelectedMinute}
        selectedDate={this.state.selectedDate}
        addMinute={this.addMinute}
        subtractMinute={this.subtractMinute}
        showTime={time} />
    );
  },

  render: function() {
    var time = this.showTimeText();

    var content = (
      <div className={this.prefixClass('time-box')}>
        <strong onClick={this.showHours}>{time.hour}</strong>
        <em>:</em>
        <strong onClick={this.showMinutes}>{time.minute}</strong>
      </div>
    );


    return (
      <div className={this.prefixClass('body')}>
        <SubPicker
          style={this.state.displayed.times}
          displayName="time-wrapper"
          body={content}
          add={this.addMinute}
          subtract={this.subtractMinute}
          showFunc={this.props.showDate}
          showText="today" />
        {this.renderHours()}
        {this.renderMinutes()}
      </div>
    );
  }
});

var HoursPicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    setSelectedHour: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker'
    };
  },

  renderHour: function() {
    var classes;
    var hour = this.props.selectedDate.getHours();
    var i = 0;
    var hours = [];

    while (i < 24) {
      classes = {};
      classes[this.prefixClass('hour')] = true;

      if (i === hour) {
        classes[this.setClassNamespace('active')] = true;
      }

      hours.push(
        <span
          className={classNames(classes)}
          onClick={this.props.setSelectedHour}
          key={i}>
          {i < 10 ? '0' + i + ':00' : i + ':00'}
        </span>
      );

      i++;
    }

    return hours;
  },

  render: function() {
    return (
      <SubPicker
        displayName="hours"
        style={this.props.style}
        subtract={this.props.subtractHour}
        add={this.props.addHour}
        showText={this.props.showTime}
        body={this.renderHour()} />
    );
  }
});

var MinutesPicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    setSelectedMinute: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker'
    };
  },

  renderMinute: function() {
    var classes;
    var minute = this.props.selectedDate.getMinutes();
    var hour = this.props.selectedDate.getHours();
    var i = 0;
    var minutes = [];

    while (i < 60) {
      classes = {};
      classes[this.prefixClass('minute')] = true;

      if (i === minute) {
        classes[this.setClassNamespace('active')] = true;
      }

      if (i % 5 === 0) {
        minutes.push(
          <span
            className={classNames(classes)}
            onClick={this.props.setSelectedMinute}
            key={i}
            >
          {i < 10 ? hour + ':0' + i : hour + ':' + i}
        </span>
        );
      }

      i++;
    }

    return minutes;
  },

  render: function() {
    return (
      <SubPicker
        displayName="minutes"
        style={this.props.style}
        subtract={this.props.subtractMinute}
        add={this.props.addMinute}
        showText={this.props.showTime}
        body={this.renderMinute()} />
    );
  }
});

var SubPicker = React.createClass({
  mixins: [ClassNameMixin],

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker'
    };
  },

  render: function() {
    var prefixClass = this.prefixClass;

    return (
      <div
        className={prefixClass(this.props.displayName)}
        style={this.props.style}>
        <table className={prefixClass('table')}>
          <thead>
          <tr className={prefixClass('header')}>
            <th className={prefixClass('prev')} onClick={this.props.subtract}>
              <i className={prefixClass('prev-icon')}></i>
            </th>
            <th
              className={prefixClass('switch')}
              colSpan="5"
              onClick={this.props.showFunc}
              >
              <div className={this.prefixClass('select')}>
                {this.props.showText}
              </div>
            </th>
            <th className={prefixClass('next')} onClick={this.props.add}>
              <i className={prefixClass('next-icon')}></i>
            </th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colSpan="7">
              {this.props.body}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = TimePicker;
