var modal = <Modal type="loading" title="正在加载..." />;

var modalInstance = (
  <ModalTrigger
    modal={modal}>
    <Button amStyle="primary">Loading 窗口</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
