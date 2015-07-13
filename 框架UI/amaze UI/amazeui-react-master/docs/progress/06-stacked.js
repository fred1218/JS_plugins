var progressInstance = (
  <Progress>
    <Progress now={65} label="Male" amStyle="success" key={1} />
    <Progress now={15} label="Female" amStyle="warning" key={2} />
    <Progress now={20} label="Other" amStyle="danger" key={3} />
  </Progress>
);

React.render(progressInstance, mountNode);
