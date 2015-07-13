var panelInstance = (
  <Panel header="面板标题" footer="面板页脚">
    这里是面板 body 内容。
    <List static fill>
      <ListItem>每个人都有一个死角， 自己走不出来，别人也闯不进去。</ListItem>
      <ListItem>我把最深沉的秘密放在那里。</ListItem>
      <ListItem>你不懂我，我不怪你。</ListItem>
      <ListItem>每个人都有一道伤口， 或深或浅，盖上布，以为不存在。</ListItem>
    </List>
  </Panel>
);

React.render(panelInstance, mountNode);
