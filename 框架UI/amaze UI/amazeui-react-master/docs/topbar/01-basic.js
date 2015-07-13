var topbarInstance = (
  <Topbar brand="Amaze UI" toggleNavKey="nav">
    <CollapsibleNav eventKey="nav">
      <Nav topbar>
        <NavItem active href="http://www.amazeui.org">首页</NavItem>
        <NavItem href="http://www.amazeui.org">开始使用</NavItem>
        <NavItem href="http://www.amazeui.org">按需定制</NavItem>
      </Nav>
    </CollapsibleNav>
  </Topbar>
);

React.render(topbarInstance, mountNode);
