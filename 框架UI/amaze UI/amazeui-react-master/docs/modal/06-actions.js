var MyActions = React.createClass({
  render: function() {
    return (
      <Modal {...this.props} type="actions">
        <div className="am-modal-actions-group">
          <ul className="am-list">
            <li className="am-modal-actions-header">分享到</li>
            <li><a href="#"><Icon icon="wechat" /> 微信</a></li>
            <li className="am-modal-actions-danger">
              <a href="#"><Icon icon="twitter" /> Twitter</a>
            </li>
          </ul>
        </div>
        <div className="am-modal-actions-group">
          <Button
            amStyle="secondary"
            block
            onClick={this.props.onRequestClose}>
            取消
          </Button>
        </div>
      </Modal>);
  }
});

var modalInstance = (
  <ModalTrigger
    modal={<MyActions />}>
    <Button amStyle="primary">Actions</Button>
  </ModalTrigger>
);

React.render(modalInstance, mountNode);
