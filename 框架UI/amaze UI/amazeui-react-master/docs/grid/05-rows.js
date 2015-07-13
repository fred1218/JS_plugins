var gridInstance = (
  <div>
    {/* 每一行使用一个 Grid，方便控制每行的样式 */}
    <h4>每行一个 Grid</h4>
    <Grid className="doc-g">
      <Col sm={6}>6</Col>
      <Col sm={6}>6</Col>
    </Grid>

    <Grid className="doc-g">
      <Col sm={6}>6</Col>
      <Col sm={6}>6</Col>
    </Grid>

    {/* 当然，这样写也没问题 */}
    <h4>多行嵌套在一个 Grid 里</h4>
    <Grid className="doc-g">
      <Col sm={6}>6</Col>
      <Col sm={6}>6</Col>

      <Col sm={6}>6</Col>
      <Col sm={6}>6</Col>
    </Grid>
  </div>
);

React.render(gridInstance, mountNode);
