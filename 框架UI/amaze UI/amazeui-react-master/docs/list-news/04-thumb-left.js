var data = {
  header: {
    title: '缩略图侧边 + 摘要',
    link: '###'
  },
  main: [
    {
      title: '我很囧，你保重....晒晒旅行中的那些囧！',
      link: 'http://www.douban.com/online/11614662/',
      desc: '囧人囧事囧照，人在囧途，越囧越萌。标记《带你出发，陪我回家》http://book.douban.com/subject/25711202/为“想读”“在读”或“读过”，有机会获得此书本活动进行3个月，每月送出三本书。会有不定期bonus！',
      img: 'http://img5.douban.com/lpic/o636459.jpg'
    },
    {
      title: '我最喜欢的一张画',
      link: 'http://www.douban.com/online/11624755/',
      desc: '你最喜欢的艺术作品，告诉大家它们的------名图画，色彩，交织，撞色，线条雕塑装置当代古代现代作品的照片美我最喜欢的画群296795413进群发画，少说多发图，',
      img: 'http://img3.douban.com/lpic/o637240.jpg'
    },
    {
      title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
      link: 'http://www.douban.com/online/11645411/',
      desc: '还在苦恼圣诞礼物再也玩儿不出新意？快来抢2013最炫彩的跨国圣诞礼物！【参与方式】1.关注“UniqueWay无二之旅”豆瓣品牌小站http://brand.douban.com/uniqueway/2.上传一张**本人**在旅行中色彩最浓郁、最丰富的照片（色彩包含取景地、周边事物、服装饰品、女生彩妆等等，发挥你们无穷的创意想象力哦！^^）一定要有本人出现喔！3. 在照片下方，附上一句旅行宣言作为照片说明。 成功参与活动！* 听他们刚才说，上传照片的次'
    }
  ]
};

var listNewsIntance = (
  <div>
    <h4>缩略图在左侧</h4>
    <ListNews data={data} thumbPosition="left" />

    <h4>缩略图在右侧</h4>
    <ListNews data={data} thumbPosition="right" />
  </div>
)

React.render(listNewsIntance, mountNode);
