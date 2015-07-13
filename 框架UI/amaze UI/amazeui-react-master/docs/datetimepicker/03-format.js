var DateTimeInputInstance = (
  <div>
    <DateTimeInput />
    <DateTimeInput format="YYYY/MM/DD" />
    <DateTimeInput format="YYYY/M/D HH:mm" />
    <DateTimeInput format="YYYY/M/D" />
    <DateTimeInput format="YYYY/MM" />
    <DateTimeInput format="YYYY/M" />
    <DateTimeInput format="YYYY" />
  </div>
);

React.render(DateTimeInputInstance, mountNode);
