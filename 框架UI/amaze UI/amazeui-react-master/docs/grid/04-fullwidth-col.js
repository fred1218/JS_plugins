var gridInstance = (
  <div>
    {/* 全宽的列可以使用容器，不需要的网格嵌套 */}
    <Container>我是一个容器里的内容</Container>

    {/* 当然，这样写也没问题 */}
    <Grid fixed className="doc-g">
      <Col sm={12}>full width col</Col>
    </Grid>
  </div>

);

React.render(gridInstance, mountNode);
