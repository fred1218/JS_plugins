var gridInstance = (
  <div>
    {/* 在 Col 上设置 xxOffset 属性 */}
    <Grid className="doc-g">
      <Col sm={1}>1</Col>
      <Col sm={11}>11</Col>
    </Grid>

    <Grid className="doc-g">
      <Col sm={1}>1</Col>
      <Col sm={9} smOffset={2}>9</Col>
    </Grid>

    <Grid className="doc-g">
      <Col sm={1}>1</Col>
      <Col sm={7} smOffset={4}>7</Col>
    </Grid>

    <Grid className="doc-g">
      <Col sm={1}>1</Col>
      <Col sm={5} smOffset={6}>5</Col>
    </Grid>

    <Grid className="doc-g">
      <Col sm={1}>1</Col>
      <Col sm={3} smOffset={8}>3</Col>
    </Grid>

    <Grid className="doc-g">
      <Col sm={1}>1</Col>
      <Col sm={1} smOffset={10}>1</Col>
    </Grid>
  </div>
);

React.render(gridInstance, mountNode);
