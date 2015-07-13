var buttonsInstance = (
  <ButtonToolbar>
    <Button>
      <Icon icon="cog" /> 设置
    </Button>

    <Button amStyle="warning">
      <Icon icon="shopping-cart" /> 败家
    </Button>

    <Button>
      <Icon icon="spinner" spin /> Loading
    </Button>

    <Button amStyle="secondary">
      下载片片 <Icon icon="cloud-download" />
    </Button>
  </ButtonToolbar>
);

React.render(buttonsInstance, mountNode);
