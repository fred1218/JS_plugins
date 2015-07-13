var modal = <Modal title="Amaze UI Modal">这一个 Modal 窗口。</Modal>;

var modalInstance = (
  <ModalTrigger modal={modal}>
    <Button amStyle='primary'>打开 Modal 窗口</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
