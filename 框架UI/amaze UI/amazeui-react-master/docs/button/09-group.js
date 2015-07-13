var buttonsInstance = (
  <div>
    <ButtonGroup>
      <Button>左手</Button>
      <Button>猪手</Button>
      <Button>右手</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button amStyle="primary">左手</Button>
      <Button amStyle="primary">猪手</Button>
      <Button amStyle="primary">右手</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button amStyle="success" round>左手</Button>
      <Button amStyle="success" round>猪手</Button>
      <Button amStyle="success" round>右手</Button>
    </ButtonGroup>
  </div>
);

React.render(buttonsInstance, mountNode);
