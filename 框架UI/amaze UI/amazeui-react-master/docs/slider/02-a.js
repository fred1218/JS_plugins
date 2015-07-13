var data = ['http://s.amazeui.org/media/i/demos/bing-1.jpg',
'http://s.amazeui.org/media/i/demos/bing-2.jpg',
'http://s.amazeui.org/media/i/demos/bing-3.jpg',
'http://s.amazeui.org/media/i/demos/bing-4.jpg'];

var themes = ['a1', 'a2', 'a3', 'a4', 'a5'];

var sliderIntance = (
  <div>
    {themes.map(function(t, i) {
      return (
        <div key={i} className="am-margin-bottom">
          <h4>主题 <code>{t}</code></h4>
          <Slider theme={t}>
            {data.map(function(item, i) {
              return (
                <Slider.Item key={i}>
                  <img src={item} />
                </Slider.Item>
              );
            })}
          </Slider>
        </div>
      );
    })}
  </div>
);

React.render(sliderIntance, mountNode);
