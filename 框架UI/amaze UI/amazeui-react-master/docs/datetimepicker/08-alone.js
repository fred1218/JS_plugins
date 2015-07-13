var DateTimeInputInstance = (
  <div>
    <DateTimeInput showDatePicker={false} format="HH:mm" />
    <DateTimeInput showTimePicker={false} format="YYYY-MM-DD" />
  </div>
);

React.render(DateTimeInputInstance, mountNode);
