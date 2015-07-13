var DateTimeInputInstance = (
  <div>
    <DateTimeInput daysOfWeekDisabled={[0, '', '', '', '', '', 6]} />
    <DateTimeInput date="2015-06-01" maxDate="2015-06-24" minDate="2015-05-21" />
  </div>
);

React.render(DateTimeInputInstance, mountNode);
