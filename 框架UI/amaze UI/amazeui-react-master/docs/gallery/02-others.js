var data = [
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
    "link": "http://s.amazeui.org/media/i/demos/bing-1.jpg",
    "title": "远方 有一个地方 那里种有我们的梦想",
    "desc": "2375-09-26"
  },
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
    "link": "http://s.amazeui.org/media/i/demos/bing-2.jpg",
    "title": "某天 也许会相遇 相遇在这个好地方",
    "desc": "2375-09-26"
  },
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
    "link": "http://s.amazeui.org/media/i/demos/bing-3.jpg",
    "title": "不要太担心 只因为我相信",
    "desc": "2375-09-26"
  },
  {
    "img": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
    "link": "http://s.amazeui.org/media/i/demos/bing-4.jpg",
    "title": "终会走过这条遥远的道路",
    "desc": "2375-09-26"
  }
];

var themes = ['overlay', 'bordered', 'imgbordered'];

var gallerIntance = (
  <div>
    {themes.map(function(theme, i) {
      return [
        <h4 key="demoTitle">主题 {theme}</h4>,
        <Gallery theme={theme} data={data} key={i}/>
      ];
    })
    }
  </div>
)

React.render(gallerIntance, mountNode);
