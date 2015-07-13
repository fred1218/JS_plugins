var thumbnailInstance = (
  <Grid>
    <Col sm={4}>
      <Thumbnail
        standalone
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
    </Col>
    <Col sm={4}>
      <Thumbnail
        src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/>
    </Col>
    <Col sm={4}>
      <Thumbnail
        href="#"
        src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/>
    </Col>
  </Grid>
);

React.render(thumbnailInstance, mountNode);
