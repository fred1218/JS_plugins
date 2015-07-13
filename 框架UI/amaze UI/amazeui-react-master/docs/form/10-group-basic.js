var iconUser = <Icon icon="user" />;
var iconPwd = <Icon icon="lock" />;

var formInstance = (
  <Form>
      <Input addonBefore="$" addonAfter=".00" />
      <Input addonBefore="@" placeholder="Email" />
      <Input addonBefore={iconUser} placeholder="User Name" />
      <Input addonBefore={iconPwd} placeholder="Password" />
      <Input addonBefore={<input type="checkbox" />} placeholder="Checkbox" />
      <Input addonBefore={<input type="radio" />} placeholder="Radio" />
  </Form>
);

React.render(formInstance, mountNode);
