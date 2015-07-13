var navInstance = (
  <Nav>
    <NavItem active href="http://www.amazeui.org">首页</NavItem>
    <NavItem href="http://www.amazeui.org">关于我们</NavItem>
    <NavItem disabled href="http://www.amazeui.org">禁用链接</NavItem>
  </Nav>
);

React.render(navInstance, mountNode);
