var data = {
  prevTitle: '上一页',
  prevLink: '?prev',
  nextTitle: '下一页',
  nextLink: '?next',
  firstTitle: '第一页',
  firstLink: '?first',
  lastTitle: '最末页',
  lastLink: '?last',
  pages: [
    {
      title: '1',
      link: '#1'
    },
    {
      title: '2',
      link: '#2',
      active: true
    },
    {
      title: '3',
      link: '#3'
    },
    {
      title: '4',
      link: '#4'
    },
    {
      title: '5',
      link: '#5'
    }
  ]
};

var handleSelect = function(link, e) {
  e.preventDefault();
  console.log('你点击了', link);
};

React.render(<Pagination
  onSelect={handleSelect}
  theme="default" data={data} />, mountNode);
