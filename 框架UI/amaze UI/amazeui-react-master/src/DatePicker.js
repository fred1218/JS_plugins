'use strict';

var React = require('react');
var classNames = require('classnames');
var fecha = require('fecha');
var ClassNameMixin = require('./mixins/ClassNameMixin');
var dateUtils = require('./utils/dateUtils');

var DatePicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    onSelect: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func,
    viewMode: React.PropTypes.string,
    minViewMode: React.PropTypes.string,
    daysOfWeekDisabled: React.PropTypes.array,
    format: React.PropTypes.string,
    date: React.PropTypes.object,
    weekStart: React.PropTypes.number,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string,
    locale: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker',
      date: new Date(),
      daysOfWeekDisabled: [],
      viewMode: 'days',
      minViewMode: 'days',
      format: 'YYYY-MM-DD',
      displayed: {
        days: {display: 'block'},
        months: {display: 'none'},
        years: {display: 'none'}
      }
    };
  },

  getInitialState: function() {
    var displayed;

    switch (this.props.viewMode) {
      case 'days':
        displayed = {
          days: {display: 'block'},
          months: {display: 'none'},
          years: {display: 'none'}
        };
        break;

      case 'months':
        displayed = {
          days: {display: 'none'},
          months: {display: 'block'},
          years: {display: 'none'}
        };
        break;

      case 'years':
        displayed = {
          days: {display: 'none'},
          months: {display: 'none'},
          years: {display: 'block'}
        };
        break;
    }

    return {
      locale: dateUtils.getLocale(this.props.locale),
      viewDate: this.props.date,
      selectedDate: this.props.date,
      displayed: displayed
    };
  },

  // DaysPicker props function

  subtractMonth: function() {
    var viewDate = this.state.viewDate;
    var newDate = new Date(viewDate.valueOf());

    newDate.setMonth(viewDate.getMonth() - 1);
    this.setState({
      viewDate: newDate
    });
  },

  addMonth: function() {
    var viewDate = this.state.viewDate;
    var newDate = new Date(viewDate.valueOf());

    newDate.setMonth(viewDate.getMonth() + 1);
    this.setState({
      viewDate: newDate
    });
  },

  setSelectedDate: function(event) {
    if (/disabled/ig.test(event.target.className)) {
      return;
    }

    var viewDate = this.state.viewDate;

    if (/new/ig.test(event.target.className)) {
      viewDate.setMonth(viewDate.getMonth() + 1);
    } else if (/old/ig.test(event.target.className)) {
      viewDate.setMonth(viewDate.getMonth() - 1);
    }

    viewDate.setDate(event.target.innerHTML);

    this.setViewDate(viewDate);
  },

  setViewDate: function(viewDate) {
    this.setState({
      viewDate: viewDate,
      selectedDate: new Date(viewDate.valueOf())
    }, function() {
      this.props.onSelect(this.state.selectedDate);
      this.props.onClose && this.props.onClose();
    });
  },

  showMonths: function() {
    return this.setState({
      displayed: {
        days: {display: 'none'},
        months: {display: 'block'},
        years: {display: 'none'}
      }
    });
  },

  // MonthsPicker props function

  subtractYear: function() {
    var viewDate = this.state.viewDate;
    var newDate = new Date(viewDate.valueOf());

    newDate.setFullYear(viewDate.getFullYear() - 1);

    return this.setState({
      viewDate: newDate
    });
  },

  addYear: function() {
    var viewDate = this.state.viewDate;
    var newDate = new Date(viewDate.valueOf());

    newDate.setFullYear(viewDate.getFullYear() + 1);
    return this.setState({
      viewDate: newDate
    });
  },

  showYears: function() {
    return this.setState({
      displayed: {
        days: {display: 'none'},
        months: {display: 'none'},
        years: {display: 'block'}
      }
    });
  },

  setViewMonth: function(event) {
    var viewDate = this.state.viewDate;
    var month = event.target.innerHTML;
    var months = this.state.locale.monthsShort;
    var i = 0;
    var len = months.length;

    for (; i < len; i++) {
      if (month === months[i]) {
        viewDate.setMonth(i);
      }
    }

    if (this.props.minViewMode === 'months') {
      this.setViewDate(viewDate);
    }

    this.setState({
      viewDate: viewDate,
      displayed: {
        days: {display: 'block'},
        months: {display: 'none'},
        years: {display: 'none'}
      }
    });
  },

  // YearsPicker props function

  setViewYear: function(event) {
    var year = event.target.innerHTML;
    var viewDate = this.state.viewDate;

    viewDate.setFullYear(year);

    if (this.props.minViewMode === 'years') {
      this.setViewDate(viewDate);
    }

    this.setState({
      viewDate: viewDate,
      displayed: {
        days: {display: 'none'},
        months: {display: 'block'},
        years: {display: 'none'}
      }
    });
  },

  addDecade: function() {
    var viewDate = this.state.viewDate;
    var newDate = new Date(viewDate.valueOf());

    newDate.setFullYear(viewDate.getFullYear() + 10);
    this.setState({
      viewDate: newDate
    });
  },

  subtractDecade: function() {
    var viewDate = this.state.viewDate;
    var newDate = new Date(viewDate.valueOf());

    newDate.setFullYear(viewDate.getFullYear() - 10);

    this.setState({
      viewDate: newDate
    });
  },

  // render children
  renderDays: function() {
    return (
      <DaysPicker
        style={this.state.displayed.days}
        selectedDate={this.state.selectedDate}
        viewDate={this.state.viewDate}

        subtractMonth={this.subtractMonth}
        addMonth={this.addMonth}
        setSelectedDate={this.setSelectedDate}
        showMonths={this.showMonths}

        locale={this.state.locale}
        weekStart={this.props.weekStart}
        daysOfWeekDisabled={this.props.daysOfWeekDisabled}
        minDate={this.props.minDate}
        maxDate={this.props.maxDate}
        />
    );
  },

  renderMonths: function() {
    return (
      <MonthsPicker
        style={this.state.displayed.months}
        locale={this.state.locale}
        addYear={this.addYear}
        subtractYear={this.subtractYear}
        viewDate={this.state.viewDate}
        selectedDate={this.state.selectedDate}
        showYears={this.showYears}
        setViewMonth={this.setViewMonth} />
    );
  },

  renderYears: function() {
    return (
      <YearsPicker
        style={this.state.displayed.years}
        viewDate={this.state.viewDate}
        selectDate={this.state.selectedDate}
        setViewYear={this.setViewYear}
        addDecade={this.addDecade}
        subtractDecade={this.subtractDecade} />
    );
  },

  render: function() {
    return (
      <div className={this.prefixClass('body')}>
        {this.renderDays()}
        {this.renderMonths()}
        {this.renderYears()}
      </div>
    );
  }
});

var DaysPicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    subtractMonth: React.PropTypes.func.isRequired,
    addMonth: React.PropTypes.func.isRequired,

    setSelectedDate: React.PropTypes.func.isRequired,
    selectedDate: React.PropTypes.object.isRequired,

    viewDate: React.PropTypes.object.isRequired,
    showMonths: React.PropTypes.func.isRequired,

    locale: React.PropTypes.object,
    weekStart: React.PropTypes.number,
    daysOfWeekDisabled: React.PropTypes.array,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker'
    };
  },

  renderDays: function() {
    var row;
    var i;
    var _ref;
    var _i;
    var _len;
    var prevY;
    var prevM;
    var classes = {};
    var html = [];
    var cells = [];
    var weekStart = this.props.weekStart || this.props.locale.weekStart;

    var weekEnd = ((weekStart + 6) % 7);

    var d = this.props.viewDate;
    var year = d.getFullYear();
    var month = d.getMonth();
    var selectedDate = this.props.selectedDate;

    var currentDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate(), 0, 0, 0, 0).valueOf();

    var prevMonth = new Date(year, month - 1, 28, 0, 0, 0, 0);
    var day = dateUtils.getDaysInMonth(prevMonth.getFullYear(), prevMonth.getMonth());

    prevMonth.setDate(day);
    prevMonth.setDate(day - (prevMonth.getDay() - weekStart + 7) % 7);

    var nextMonth = new Date(prevMonth);

    nextMonth.setDate(nextMonth.getDate() + 42);
    nextMonth = nextMonth.valueOf();

    var minDate = this.props.minDate && fecha.parse(this.props.minDate);
    var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);

    while (prevMonth.valueOf() < nextMonth) {
      classes[this.prefixClass('day')] = true;

      prevY = prevMonth.getFullYear();
      prevM = prevMonth.getMonth();


      // set className old new
      if ((prevM < month && prevY === year) || prevY < year) {
        classes[this.prefixClass('old')] = true;
      } else if ((prevM > month && prevY === year) || prevY > year) {
        classes[this.prefixClass('new')] = true;
      }

      // set className active
      if (prevMonth.valueOf() === currentDate) {
        classes[this.setClassNamespace('active')] = true;
      }

      // set className disabled
      if ((minDate && prevMonth.valueOf() < minDate)
          || (maxDate && prevMonth.valueOf() > maxDate)) {
        classes[this.setClassNamespace('disabled')] = true;
      }

       // week disabled
      if (this.props.daysOfWeekDisabled) {
        _ref = this.props.daysOfWeekDisabled;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          i = _ref[_i];
          if (prevMonth.getDay() === this.props.daysOfWeekDisabled[i]) {
            classes[this.setClassNamespace('disabled')] = true;
            break;
          }
        }
      }

      cells.push(
        <td
          key={prevMonth.getMonth() + '-' + prevMonth.getDate()}
          className={classNames(classes)}
          onClick={this.props.setSelectedDate}>
          {prevMonth.getDate()}
        </td>
      );

      // add tr
      if (prevMonth.getDay() === weekEnd) {
        row = <tr key={prevMonth.getMonth() + '-' + prevMonth.getDate()}>{cells}</tr>;
        html.push(row);
        cells = [];
      }

      classes = {};
      prevMonth.setDate(prevMonth.getDate() + 1);
    }

    return html;
  },

  renderWeek: function() {
    var ths = [];
    var locale = this.props.locale;
    var weekStart = this.props.weekStart || this.props.locale.weekStart;
    var weekEnd = weekStart + 7;

    while (weekStart < weekEnd) {
      ths.push(
        <th key={weekStart} className={this.prefixClass('dow')}>
          {locale.daysMin[weekStart++ % 7]}
        </th>
      );
    }

    return (
      <tr>
        {ths}
      </tr>
    );
  },

  render: function() {
    var viewDate = this.props.viewDate;
    var prefixClass = this.prefixClass;
    var locale = this.props.locale;

    return (
      <div
        className={prefixClass('days')}
        style={this.props.style}>
        <table className={prefixClass('table')}>
          <thead>
          <tr className={prefixClass('header')}>
            <th className={prefixClass('prev')} onClick={this.props.subtractMonth}>
              <i className={prefixClass('prev-icon')}></i>
            </th>
            <th
              className={prefixClass('switch')}
              colSpan="5"
              onClick={this.props.showMonths}>
              <div className={this.prefixClass('select')}>
                {locale.monthsShort[viewDate.getMonth()]}
                {viewDate.getFullYear()}
              </div>
            </th>
            <th className={prefixClass('next')} onClick={this.props.addMonth}>
              <i className={prefixClass('next-icon')}></i>
            </th>
          </tr>
          {this.renderWeek()}
          </thead>
          <tbody>
          {this.renderDays()}
          </tbody>
        </table>
      </div>
    );
  }
});

var MonthsPicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    locale: React.PropTypes.object,
    subtractYear: React.PropTypes.func.isRequired,
    addYear: React.PropTypes.func.isRequired,
    viewDate: React.PropTypes.object.isRequired,
    selectedDate: React.PropTypes.object.isRequired,
    showYears: React.PropTypes.func.isRequired,
    setViewMonth: React.PropTypes.func.isRequired,
    minDate: React.PropTypes.string,
    maxDate: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker'
    };
  },

  renderMonths: function() {
    var classes = {};
    var month = this.props.selectedDate.getMonth();
    var year = this.props.selectedDate.getFullYear();
    var i = 0;
    var months = [];
    var minDate = this.props.minDate && fecha.parse(this.props.minDate);
    var maxDate = this.props.maxDate && fecha.parse(this.props.maxDate);
    var prevMonth = new Date(year, month);

    // TODO: minDate maxDate months
    while (i < 12) {
      classes[this.prefixClass('month')] = true;

      if (this.props.viewDate.getFullYear() ===
        this.props.selectedDate.getFullYear()
        && i === month) {
        classes[this.setClassNamespace('active')] = true;
      }

      // set className disabled
      if ((minDate && prevMonth.valueOf() < minDate)
        || (maxDate && prevMonth.valueOf() > maxDate)) {
        classes[this.setClassNamespace('disabled')] = true;
      }

      months.push(
        <span
          className={classNames(classes)}
          onClick={this.props.setViewMonth}
          key={i}>
          {this.props.locale.monthsShort[i]}
        </span>
      );

      classes = {};
      i++;
    }

    return months;
  },

  render: function() {
    return (
      <SubPicker
        displayName="months"
        style={this.props.style}
        subtract={this.props.subtractYear}
        add={this.props.addYear}
        showFunc={this.props.showYears}
        showText={this.props.viewDate.getFullYear()}
        body={this.renderMonths()} />
    );
  }
});

var YearsPicker = React.createClass({
  mixins: [ClassNameMixin],

  propTypes: {
    viewDate: React.PropTypes.object.isRequired,
    selectDate: React.PropTypes.object.isRequired,
    subtractDecade: React.PropTypes.func.isRequired,
    addDecade: React.PropTypes.func.isRequired,
    setViewYear: React.PropTypes.func.isRequired
  },

  getDefaultProps: function() {
    return {
      classPrefix: 'datepicker'
    };
  },

  renderYears: function() {
    var classes = {};
    var years = [];
    var i = -1;
    var year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;

    year--;

    while (i < 11) {
      classes[this.prefixClass('year')] = true;

      if (i === -1 || i === 10) {
        classes[this.prefixClass('old')] = true;
      }

      if (this.props.selectDate.getFullYear() === year) {
        classes[this.setClassNamespace('active')] = true;
      }

      years.push(
        <span
          className={classNames(classes)}
          onClick={this.props.setViewYear}
          key={year}>
          {year}
        </span>
      );

      classes = {};
      year++;
      i++;
    }

    return years;
  },

  render: function() {
    var year = parseInt(this.props.viewDate.getFullYear() / 10, 10) * 10;
    var addYear = year + 9;
    var showYear = year + '-' + addYear;

    return (
      <SubPicker
        displayName="years"
        style={this.props.style}
        subtract={this.props.subtractDecade}
        add={this.props.addDecade}
        showText={showYear}
        body={this.renderYears()} />
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
              onClick={this.props.showFunc}>
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

module.exports = DatePicker;
