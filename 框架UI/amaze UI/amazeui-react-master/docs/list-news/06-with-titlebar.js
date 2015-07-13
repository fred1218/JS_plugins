var data = {
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


React.render(<ListNews
  header={<Titlebar title="栏目标题" />}
  data={data} />, mountNode);
