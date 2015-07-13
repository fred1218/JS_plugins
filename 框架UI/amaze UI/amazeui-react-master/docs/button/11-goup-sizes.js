var buttonsInstance = (
  <div>
    <ButtonGroup>
      <Button amSize="lg">左手 lg</Button>
      <Button amSize="lg">猪手 lg</Button>
      <Button amSize="lg">右手 lg</Button>
    </ButtonGroup>

    <br/><br/>

    <ButtonGroup>
      <Button>左手</Button>
      <Button>猪手</Button>
      <Button>右手</Button>
    </ButtonGroup>

    <br/><br/>

    <ButtonGroup>
      <Button amSize="sm">左手 - sm</Button>
      <Button amSize="sm">猪手 - sm</Button>
      <Button amSize="sm">右手 - sm</Button>
    </ButtonGroup>

    <br/><br/>

    <ButtonGroup>
      <Button amSize="xs">左手 - xs</Button>
      <Button amSize="xs">猪手 - xs</Button>
      <Button amSize="xs">右手 - xs</Button>
    </ButtonGroup>
  </div>
);

React.render(buttonsInstance, mountNode);
