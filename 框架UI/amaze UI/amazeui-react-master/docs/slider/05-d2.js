var data = [{img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",desc:'<div class="am-slider-content"><h2 class="am-slider-title">远方 有一个地方 那里种有我们的梦想</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="am-slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",desc:'<div class="am-slider-content"><h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="am-slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",desc:'<div class="am-slider-content"><h2 class="am-slider-title">不要太担心 只因为我相信 终会走过这条遥远的道路</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="am-slider-more">了解更多</a>'},{img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",desc:'<div class="am-slider-content"><h2 class="am-slider-title">OH PARA PARADISE 是否那么重要 你是否那么地遥远</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p></div><a class="am-slider-more">了解更多</a>'}];


var sliderIntance = (
<Slider theme="d2">
  {data.map(function(item, k) {
    return (
      <Slider.Item key={k}>
        <img src={item.img} />
        <div
          className="am-slider-desc"
          dangerouslySetInnerHTML={{__html: item.desc}} />
      </Slider.Item>
    );
  })}
</Slider>);

React.render(sliderIntance, mountNode);
