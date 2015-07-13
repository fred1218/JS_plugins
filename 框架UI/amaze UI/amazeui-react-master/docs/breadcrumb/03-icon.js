var breadcrumbInstance = (
  <Breadcrumb slash>
    <Breadcrumb.Item href="http://www.amazeui.org">
      <Icon icon="home" />首页
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://www.amazeui.org">分类</Breadcrumb.Item>
    <Breadcrumb.Item active>内容</Breadcrumb.Item>
  </Breadcrumb>
);

React.render(breadcrumbInstance, mountNode);
