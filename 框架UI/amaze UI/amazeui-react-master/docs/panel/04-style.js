var panelInstance = (
  <div>
    <Panel header="面板标题">
      默认面板
    </Panel>
    <Panel header="面板标题" amStyle="primary">
      primary - 面板
    </Panel>
    <Panel header="面板标题" amStyle="secondary">
      secondary - 面板
    </Panel>
    <Panel header="面板标题" amStyle="success">
      success - 面板
    </Panel>
    <Panel header="面板标题" amStyle="warning">
      warning - 面板
    </Panel>
    <Panel header="面板标题" amStyle="danger">
      danger - 面板
    </Panel>
  </div>
);

React.render(panelInstance, mountNode);
