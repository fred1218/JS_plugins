var progressInstance = (
  <div>
    <Progress now={80} striped amStyle="danger" />
    <Progress now={60} striped amStyle="warning" />
    <Progress now={45} striped amStyle="success" />
    <Progress now={30} striped amStyle="secondary" />
    <Progress now={15} striped />
  </div>
);

React.render(progressInstance, mountNode);
