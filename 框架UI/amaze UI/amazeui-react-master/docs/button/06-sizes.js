var buttonsInstance = (
  <div>
    <ButtonToolbar>
      <Button amSize="xl">按钮 - xl</Button>
      <Button amStyle="primary" amSize="xl">按钮 - xl</Button>
    </ButtonToolbar>

    <ButtonToolbar>
      <Button amSize="lg">按钮 - lg</Button>
      <Button amStyle="primary" amSize="lg">按钮 - lg</Button>
    </ButtonToolbar>

    <ButtonToolbar>
      <Button>按钮 - 默认</Button>
      <Button amStyle="primary">按钮 - 默认</Button>
    </ButtonToolbar>

    <ButtonToolbar>
      <Button amSize="sm">按钮 - sm</Button>
      <Button amStyle="primary" amSize="sm">按钮 - sm</Button>
    </ButtonToolbar>

    <ButtonToolbar>
      <Button amSize="xs">按钮 - xs</Button>
      <Button amStyle="primary" amSize="xs">按钮 - xs</Button>
    </ButtonToolbar>
  </div>
);

React.render(buttonsInstance, mountNode);
