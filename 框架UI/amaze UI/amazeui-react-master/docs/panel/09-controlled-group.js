// 一次只能展开一个面板

var ControlledPanelGroup = React.createClass({
  getInitialState: function() {
    return {
      activeKey: 1
    };
  },

  handleSelect: function(key) {
    this.setState({activeKey: key});
  },

  render: function() {
    return (
      <PanelGroup activeKey={this.state.activeKey} onSelect={this.handleSelect} accordion>
        <Panel header="面板 1" eventKey="1">面板 1 内容</Panel>
        <Panel header="面板 2" eventKey="2">面板 2 内容</Panel>
      </PanelGroup>
    );
  }
});

React.render(<ControlledPanelGroup />, mountNode);
