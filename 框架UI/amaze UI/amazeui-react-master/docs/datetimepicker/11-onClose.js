var DateTimeText = React.createClass({
  getInitialState: function() {
    return {
      dateTime: '2015-05-20 12:14'
    };
  },

  handleSelect: function(dateTime) {
    this.setState({
      dateTime: dateTime
    });
  },

  handleClose: function() {
    alert('选择：' + this.state.dateTime);
  },

  render: function() {
    return (
      <div>
        <p>日期时间: {this.state.dateTime}</p>
        <DateTimePicker
          style={{display: 'block'}}
          onSelect={this.handleSelect}
          onClose={this.handleClose}
          dateTime="2015-05-20 12:14"
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
