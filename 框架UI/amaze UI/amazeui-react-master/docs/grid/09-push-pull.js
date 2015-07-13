var gridInstance = (
  <Grid className="doc-g">
    {/*
     结构中 main 在前， sidebar 在后
     通过 push/pull，在 md 区间将 sidebar 显示到左侧，main 显示到右侧
     lg 区间 reset 回结构排序
     */}
    <Col md={8} mdPush={4} lgResetOrder>8 main</Col>
    <Col md={4} mdPull={8} lgResetOrder>4 sidebar</Col>
  </Grid>
);

React.render(gridInstance, mountNode);
