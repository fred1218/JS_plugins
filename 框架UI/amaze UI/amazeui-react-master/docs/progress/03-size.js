var progressInstance = (
  <div>
    <Progress now={80} amSize="xs" />
    <Progress now={60} amSize="sm" />
    <Progress now={40} />
  </div>
);

React.render(progressInstance, mountNode);
