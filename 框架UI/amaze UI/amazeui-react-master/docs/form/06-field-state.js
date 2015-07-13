var formInstance = (
  <Form>
    <Input placeholder="验证成功" label="验证成功" validation="success" />
    <Input placeholder="验证警告" label="验证警告" validation="warning" />
    <Input placeholder="验证失败" label="验证失败" validation="error" />
    <FormGroup validation="success">
      <label>单选按钮：</label>
      <Input type="radio" label="男" inline />
      <Input type="radio" label="女" inline />
    </FormGroup>
  </Form>
);

React.render(formInstance, mountNode);
