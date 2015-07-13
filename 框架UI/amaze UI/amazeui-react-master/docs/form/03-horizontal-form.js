var formInstance = (
  <Form horizontal>
    <Input label="用户名" labelClassName="am-u-sm-2"
           wrapperClassName="am-u-sm-10" />
    <Input type="textarea" label="留言" labelClassName="am-u-sm-2"
           wrapperClassName="am-u-sm-10" />
    <FormGroup>
      <Input type="checkbox" label="有回复时邮件通知孤"
             wrapperClassName="am-u-sm-offset-2 am-u-sm-10" />
    </FormGroup>
    <Input type="submit" amStyle="primary" value="提交"
           wrapperClassName="am-u-sm-offset-2 am-u-sm-10" />
  </Form>
);

React.render(formInstance, mountNode);
