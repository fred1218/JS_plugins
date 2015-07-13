var formInstance = (
  <Form horizontal>
    <Input placeholder="amSize - lg" amSize="lg" />
    <Input placeholder="default size" />
    <Input placeholder="default sm" amSize="sm" />
    <hr/>
    <Input
      label="用户名"
      labelClassName="am-u-sm-2"
      placeholder="amSize - sm"
      wrapperClassName="am-u-sm-10"
      amSize="sm" />
    <Input
      type="textarea"
      label="留言"
      labelClassName="am-u-sm-2"
      placeholder="amSize - lg"
      wrapperClassName="am-u-sm-10"
      amSize="lg" />
  </Form>
);

React.render(formInstance, mountNode);
