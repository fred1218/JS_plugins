var gridInstance = (
  <div>
    {/* 在 Col 上设置 xxCentered 属性 */}

    {/* 始终居中 */}
    <Grid className="doc-g">
      <Col sm={3} smCentered>3 centered</Col>
    </Grid>

    {/* lg 区间居中 */}
    <Grid className="doc-g">
      <Col sm={6} lgCentered>6 lgCentered</Col>
    </Grid>

    {/* lg 区间不居中 */}
    <Grid className="doc-g">
      <Col sm={9} smCentered lgUnCentered>9 md down centered</Col>
    </Grid>
  </div>
);

React.render(gridInstance, mountNode);
