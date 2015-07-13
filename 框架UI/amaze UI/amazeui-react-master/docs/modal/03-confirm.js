var modal = <Modal type="confirm" title="Amaze UI">你，确定要删除这条记录吗？</Modal>;


function onConfirm(e) {
  // e.target
  console.log('Confirmed...');
}

function onCancel() {
  console.log('Canceled...');
}

var modalInstance = (
  <ModalTrigger
    modal={modal}
    onCancel={onCancel}
    onConfirm={onConfirm}>
    <Button amStyle="danger">显示 Confirm</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
