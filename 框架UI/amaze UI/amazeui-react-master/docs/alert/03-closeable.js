var CloseableAlert = React.createClass({
  getInitialState: function() {
    return {
      visible: true
    };
  },

  handleClose: function() {
    this.setState({
      visible: false
    });
  },

  render: function() {
    return this.state.visible ? (
      <Alert onClose={this.handleClose}>
        <p>没什么可给你，但求凭这阙歌。谢谢你风雨里，都不退愿陪着我。</p>
      </Alert>
    ) : null;
  }
});

React.render(<CloseableAlert />, mountNode);
