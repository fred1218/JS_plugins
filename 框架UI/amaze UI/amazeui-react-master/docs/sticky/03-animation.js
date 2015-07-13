var scrollSpyNavInstance = (
  <Sticky top={120} animation="slide-top">
    <Button amStyle="danger" block>固定在距离顶部 120px 的位置</Button>
  </Sticky>
);

React.render(scrollSpyNavInstance, mountNode);
