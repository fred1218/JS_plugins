var modal = (
  <Modal type="prompt" title="Amaze UI">
    来来来，吐槽点啥吧
    <input type="text" className="am-modal-prompt-input"/>
  </Modal>
);


function onConfirm(data) {
  console.log(data);
}

function onCancel() {
  console.log('Canceled...');
}

var modalInstance = (
  <ModalTrigger
    modal={modal}
    onCancel={onCancel}
    onConfirm={onConfirm}>
    <Button amStyle="warning">模拟 Prompt</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
