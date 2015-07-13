var uCheckExample = (
  <div>
    <Grid>
      <Col sm={6}>
        <UCheck type="checkbox" label="未选中" />
        <UCheck type="checkbox" label="选中" defaultChecked />
        <UCheck type="checkbox" label="禁用/未选中" disabled />
        <UCheck type="checkbox" label="禁用/选中" disabled checked />
      </Col>

      <Col sm={6}>
        <UCheck type="radio" name="uc-rc-3" label="未选中" />
        <UCheck type="radio" name="uc-rc-3" label="选中" defaultChecked />
        <UCheck type="radio" label="禁用/未选中" disabled />
        <UCheck type="radio" label="禁用/选中" disabled checked />
      </Col>
    </Grid>

    <h3>颜色样式</h3>
    <Grid>
      <Col sm={6}>
        <UCheck type="checkbox" label="Secondary" amStyle="secondary" />
        <UCheck type="checkbox" label="Success" amStyle="success" />
        <UCheck type="checkbox" label="Warning" amStyle="warning" />
        <UCheck type="checkbox" label="Danger" amStyle="danger" />
      </Col>

      <Col sm={6}>
        <UCheck type="radio" name="uc-rd-1" label="Secondary" amStyle="secondary" />
        <UCheck type="radio" name="uc-rd-1" label="Success" amStyle="success" />
        <UCheck type="radio" name="uc-rd-1" label="Warning" amStyle="warning" />
        <UCheck type="radio" name="uc-rd-1" label="Danger" amStyle="danger" />
      </Col>
    </Grid>

    <h3>行内排列</h3>
    <FormGroup>
      <h4>装备</h4>
      <UCheck label="iPhone" inline />
      <UCheck label="iMac" inline />
      <UCheck label="Mac Book" inline />
    </FormGroup>

    <FormGroup>
      <h4>性别</h4>
      <UCheck type="radio" name="uc-rd-2" label="男" inline />
      <UCheck type="radio" name="uc-rd-2" label="女" inline />
      <UCheck type="radio" name="uc-rd-2" label="其他" inline />
    </FormGroup>
  </div>
);

React.render(uCheckExample, mountNode);
