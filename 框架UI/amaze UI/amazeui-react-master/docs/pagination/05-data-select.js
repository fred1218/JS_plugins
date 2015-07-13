var data = {
  prevTitle: '上一页',
  prevLink: '#prev',
  nextTitle: '下一页',
  nextLink: '#next',
  pages: [
    {
      title: '1',
      link: '?1'
    },
    {
      title: '2',
      link: '?2'
    },
    {
      title: '3',
      link: '?3'
    },
    {
      title: '4',
      link: '?4'
    },
    {
      title: '5',
      link: '?5'
    }
  ]
};

var selectHandle = function(link, e) {
  e.preventDefault();
  console.log('你点击了：', link);
};

React.render(<Pagination
  onSelect={selectHandle}
  theme="select" data={data} />, mountNode);
