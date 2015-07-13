var formInstance = (
  <Form inline>
    <Input placeholder="用户名" icon="user" />
    {'\u00a0'}
    <Input placeholder="密码" icon="lock" />
    {'\u00a0'}
    <Input type="submit" amStyle="primary" value="登录" standalone/>
  </Form>
);

React.render(formInstance, mountNode);
