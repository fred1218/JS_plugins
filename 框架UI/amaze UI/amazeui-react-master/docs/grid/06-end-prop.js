var gridInstance = (
  <div>
    {/* Grid 中最后一个 Col 会向右浮动，如果不足 12 列添加 `end` 属性可以取消想用浮动 */}
    <p>没有添加 end 属性</p>
    <Grid className="doc-g">
      <Col sm={3}>3</Col>
      <Col sm={3}>3</Col>
      <Col sm={3}>3</Col>
    </Grid>
    <hr/>
    <p>添加了 end 属性</p>
    <Grid className="doc-g">
      <Col sm={3}>3</Col>
      <Col sm={3}>3</Col>
      <Col sm={3} end>3</Col>
    </Grid>
  </div>
);

React.render(gridInstance, mountNode);
