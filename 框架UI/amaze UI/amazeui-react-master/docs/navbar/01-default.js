var data = [
  {
    title: '呼叫',
    link: 'tel:123456789',
    icon: 'phone'
  },
  {
    title: 'GitHub',
    link: 'https://github.com/allmobilize/amazeui',
    icon: 'github'
  },
  {
    title: '下载使用',
    link: 'http://amazeui.org/getting-started',
    icon: 'download'
  },
  {
    title: 'Bug 反馈',
    link: 'https://github.com/allmobilize/amazeui/issues',
    icon: 'location-arrow'
  }
];

var handleSelect = function(link, e) {
  e.preventDefault();
  console.log('你点击了：', link);
};

React.render(<Navbar onSelect={handleSelect} data={data} />, mountNode);
