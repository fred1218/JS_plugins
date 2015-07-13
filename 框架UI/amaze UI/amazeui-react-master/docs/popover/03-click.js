var popoverInstance = (
  <PopoverTrigger
    trigger="click" // 设置触发方式
    amStyle="warning" // 设置 popover 样式
    amSize="sm" // 设置 popover 大小
    placement="top"
    popover={<Popover><strong>Click</strong> 显示的 Popover</Popover>}>
    <Button amStyle="primary">点击显示 Popover</Button>
  </PopoverTrigger>
);

React.render(popoverInstance, mountNode);
