var data = [{img:"http://s.amazeui.org/media/i/demos/bing-1.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-1.jpg",desc:'<h2 class="am-slider-title">远方 有一个地方 那里种有我们的梦想</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'},{img:"http://s.amazeui.org/media/i/demos/bing-2.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-2.jpg",desc:'<h2 class="am-slider-title">某天 也许会相遇 相遇在这个好地方</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'},{img:"http://s.amazeui.org/media/i/demos/bing-3.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-3.jpg",desc:'<h2 class="am-slider-title">不要太担心 只因为我相信 终会走过这条遥远的道路</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'},{img:"http://s.amazeui.org/media/i/demos/bing-4.jpg",thumb:"http://s.amazeui.org/media/i/demos/bing-4.jpg",desc:'<h2 class="am-slider-title">OH PARA PARADISE 是否那么重要 你是否那么地遥远</h2><p>内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内</p>'}];

var sliderIntance = (
<Slider theme="d3">
  {data.map(function(item, k) {
    return (
      <Slider.Item key={k} thumbnail={item.thumb}>
        <img src={item.img} />
        <div
          className="am-slider-desc"
          dangerouslySetInnerHTML={{__html: item.desc}} />
      </Slider.Item>
    );
  })}
</Slider>);

React.render(sliderIntance, mountNode);
