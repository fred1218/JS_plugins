var buttonsInstance = (
  <ButtonToolbar>
      <ButtonGroup>
        <Button amStyle="primary"><i
          className="am-icon-align-left"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-align-center"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-align-right"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-align-justify"></i></Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button amStyle="primary"><i
          className="am-icon-font"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-bold"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-italic"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-underline"></i></Button>
      </ButtonGroup>

      <ButtonGroup className="am-btn-group">
        <Button amStyle="primary"><i
          className="am-icon-copy"></i></Button>
        <Button amStyle="primary"><i
          className="am-icon-paste"></i></Button>
    </ButtonGroup>
  </ButtonToolbar>
);

React.render(buttonsInstance, mountNode);
