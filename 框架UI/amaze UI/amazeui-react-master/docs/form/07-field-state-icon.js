var formInstance = (
  <Form>
    <Input placeholder="验证成功" label="验证成功" validation="success" hasFeedback />
    <Input placeholder="验证警告" label="验证警告" validation="warning" hasFeedback />
    <Input placeholder="验证失败" label="验证失败" validation="error" hasFeedback />
    <Input placeholder="没有 Label" validation="success" hasFeedback />
  </Form>
);

React.render(formInstance, mountNode);
