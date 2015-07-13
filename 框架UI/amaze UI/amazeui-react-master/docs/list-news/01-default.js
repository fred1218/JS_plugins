var data = {
  header: {
    title: '栏目标题',
    link: '##'
  },
  main: [
    {
      title: '我很囧，你保重....晒晒旅行中的那些囧！',
      link: '##',
      date: '2013-09-18'
    },
    {
      title: '我最喜欢的一张画',
      link: '##',
      date: '2013-10-14'
    },
    {
      title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
      link: '##',
      date: '2013-11-18'
    }
  ]
};

var listnewsInstance = (
  <div>
    <h3>更多在上</h3>
    <ListNews data={data} morePosition="top" />

    <h3>更多在下</h3>
    <ListNews data={data} morePosition="bottom" />
  </div>
);

React.render(listnewsInstance, mountNode);
