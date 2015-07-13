var data = [
{
  thumb: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
  img: 'http://s.amazeui.org/media/i/demos/bing-1.jpg'
},
{
  thumb: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
  img: 'http://s.amazeui.org/media/i/demos/bing-2.jpg'
},
{
  thumb: 'http://s.amazeui.org/media/i/demos/bing-3.jpg',
  img: 'http://s.amazeui.org/media/i/demos/bing-3.jpg'
},
{
  thumb: 'http://s.amazeui.org/media/i/demos/bing-4.jpg',
  img: 'http://s.amazeui.org/media/i/demos/bing-4.jpg'
}];

var sliderIntance = (
  <Slider directionNav={false}>
    {data.map(function(item, i) {
      return (
        <Slider.Item key={i} thumbnail={item.thumb}>
          <img src={item.img} />
        </Slider.Item>
      );
    })}
  </Slider>
);

React.render(sliderIntance, mountNode);
