var navInstance = (
  <Nav>
    <NavItem href="http://www.amazeui.org">
      <Icon icon="home" />首页</NavItem>
    <NavItem header>开始使用</NavItem>
    <NavItem href="http://www.amazeui.org">关于我们</NavItem>
    <NavItem href="http://www.amazeui.org">联系我们</NavItem>
    <NavItem divider />
    <NavItem href="http://www.amazeui.org">响应式</NavItem>
    <NavItem href="http://www.amazeui.org">移动优先</NavItem>
  </Nav>
);

React.render(navInstance, mountNode);
