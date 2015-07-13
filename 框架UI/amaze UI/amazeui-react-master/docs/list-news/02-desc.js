var data = {
  header: {
    title: '带摘要的列表',
    link: '###'
  },
  main: [
    {
      title: '我很囧，你保重....晒晒旅行中的那些囧！',
      link: 'http://www.douban.com/online/11614662/',
      desc: '囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》http://book.douban.com/subject/25711202/为“想读”“在读”或“读过”，有机会获得此书本活动进行3个月，每月送出三本书。会有不定期bonus！'
    },
    {
      title: '我最喜欢的一张画',
      link: 'http://www.douban.com/online/11624755/',
      desc: '你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色，线条雕塑装置当代古代现代作品的照片美我最喜欢的画群296795413进群发画，少说多发图，'
    },
    {
      title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
      link: 'http://www.douban.com/online/11645411/'
    }
  ]
};

var listnewsInstance = (
  <div>
    <ListNews data={data} morePosition="top"/>
  </div>
);

React.render(listnewsInstance, mountNode);
