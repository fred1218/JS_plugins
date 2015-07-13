var modal = <Modal type="alert" title="Amaze UI">这一个 Alert 窗口。</Modal>;

var modalInstance = (
  <ModalTrigger modal={modal}>
    <Button amStyle='primary'>显示 Alert</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
