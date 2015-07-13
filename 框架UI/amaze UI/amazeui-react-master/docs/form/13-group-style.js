var iconUser = <span className="am-icon-user"></span>;
var btnSearch = (
  <Button amStyle="primary">{/* Button 仍然需要设置样式 */}
    <Icon icon="search" />
  </Button>
);

var formInstance = (
  <Form>
    <Input addonBefore={iconUser} placeholder="User Name" amStyle="primary" />
    <Input addonBefore={iconUser} placeholder="User Name" amStyle="secondary" />
    <Input addonBefore={iconUser} placeholder="User Name" amStyle="success" />
    <Input addonBefore={iconUser} placeholder="User Name" amStyle="warning" />
    <Input addonBefore={iconUser} placeholder="User Name" amStyle="danger" />
    <Input btnBefore={btnSearch} placeholder="手气不错" amStyle="primary" />
  </Form>
);

React.render(formInstance, mountNode);
