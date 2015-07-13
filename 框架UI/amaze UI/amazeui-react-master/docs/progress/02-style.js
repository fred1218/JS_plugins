var progressInstance = (
  <div>
    <Progress now={15} />
    <Progress amStyle="secondary" now={30} />
    <Progress amStyle="success" now={45} />
    <Progress amStyle="warning" now={60} />
    <Progress amStyle="danger" now={75} />
  </div>
);

React.render(progressInstance, mountNode);
