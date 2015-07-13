var formInstance = (
  <Grid>
    <Col sm={8} smCentered>
      <Form>
        <fieldset className="am-form-set">
          <Input placeholder="用户名" standalone />
          <Input type="password" placeholder="密码" standalone />
          <Input type="email" placeholder="邮箱" standalone />
        </fieldset>
        <Input type="submit" value="提交" amStyle="primary" block />
        </Form>
    </Col>
  </Grid>
);

React.render(formInstance, mountNode);
