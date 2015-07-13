var listInstance = (
  <div>
    <List border static>
      <ListItem>
        <Badge amStyle="warning">NO</Badge><Badge amStyle="success">YEs</Badge>走在风中 今天阳光 突然好温柔
      </ListItem>
      <ListItem>
        <Badge>1</Badge>天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
      </ListItem>
      <ListItem>
        <Badge>20</Badge>奔向梦幻的疆界
      </ListItem>
      <ListItem>
        <Badge>5</Badge>让我享受这感觉
      </ListItem>
    </List>
  </div>
);

// 添加带有链接的列表 样式有问题
//<hr />
//
//<List border>
//<ListItem href="http://www.amazeui.org"><Badge amStyle="warning">NO</Badge><Badge amStyle="success">YEs</Badge>走在风中 今天阳光 突然好温柔</ListItem>
//<ListItem href="http://www.amazeui.org"><Badge>1</Badge>天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后</ListItem>
//<ListItem href="http://www.amazeui.org"><Badge>20</Badge>奔向梦幻的疆界</ListItem>
//<ListItem href="http://www.amazeui.org"><Badge>5</Badge>让我享受这感觉</ListItem>
//</List>

React.render(listInstance, mountNode);
