var DateTimeText = React.createClass({
  getInitialState: function() {
    return {
      dateTime: '2015-05-20 12:14',
      time: '13:14',
      date: '2015-05-20'
    };
  },

  handleSelect: function(dateTime) {
    this.setState({
      dateTime: dateTime
    });
  },

  handleSelectDate: function(date) {
    this.setState({
      date: date
    });
  },

  handleSelectTime: function(time) {
    this.setState({
      time: time
    });
  },

  render: function() {
    return (
      <div>
        <p>日期时间: {this.state.dateTime}</p>
        <DateTimePicker
          style={{display: 'block'}}
          onSelect={this.handleSelect}
          dateTime="2015-05-20 12:14"
          caretDisplayed={false}
          />

        <p>日期: {this.state.date}</p>
        <DateTimePicker
          style={{display: 'block'}}
          onSelect={this.handleSelectDate}
          dateTime="2015-05-20"
          format="YYYY-MM-DD"
          showTimePicker={false}
          caretDisplayed={false}
          />

        <p>时间: {this.state.time}</p>
        <DateTimePicker
          style={{display: 'block'}}
          onSelect={this.handleSelectTime}
          dateTime="13:14"
          format="HH:mm"
          showDatePicker={false}
          caretDisplayed={false}
          />
      </div>
    );
  }
});

var DateTimePickerInstance = (
  <DateTimeText />
);

React.render(DateTimePickerInstance, mountNode);
