// 可以同时展开/闭合多个面板

var panelGroupInstance = (
  <PanelGroup defaultActiveKey="2" accordion>
    <Panel header="面板 1" eventKey="1">面板 1 内容</Panel>
    <Panel header="面板 2" eventKey="2">面板 2 内容</Panel>
  </PanelGroup>
);

React.render(panelGroupInstance, mountNode);
