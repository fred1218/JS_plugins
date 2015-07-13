// 响应式属性参见 AvgGrid

var thumbnailInstance = (
  <Thumbnails sm={3}>
    <Thumbnail
      standalone
      src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
    <Thumbnail
      src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/>

    <Thumbnail
      href="#"
      src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/>
  </Thumbnails>
);

React.render(thumbnailInstance, mountNode);
