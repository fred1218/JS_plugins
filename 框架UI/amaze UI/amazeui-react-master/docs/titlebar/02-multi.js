var nav = [
  {
    title: '手机',
    link: '#more-1'
  },
  {
    title: '数码',
    link: '#more-2'
  },
  {
    title: '影音',
    link: '#more-3'
  }
];

React.render(<Titlebar
  theme="multi"
  title="科技频道"
  nav={nav} />, mountNode);
