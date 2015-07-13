var caption = (
  <div>
    <h3>百年孤独选</h3>

    <p>
      无论走到哪里，都应该记住，过去都是假的，回忆是一条没有尽头的路，一切以往的春天都不复存在，就连那最坚韧而又狂乱的爱情归根结底也不过是一种转瞬即逝的现实。</p>

    <ButtonToolbar>
      <Button amStyle="primary">孤独</Button>
      <Button amStyle="default">百年</Button>
    </ButtonToolbar>
  </div>
);

var thumbnailInstance = (
  <Grid>
    <Col sm={6}>
      <Thumbnail
        caption={caption}
        src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
    </Col>
    <Col sm={6}>
      <Thumbnail
        href="#"
        src="http://s.amazeui.org/media/i/demos/bing-2.jpg">
        {caption}
      </Thumbnail>
    </Col>
  </Grid>
);

React.render(thumbnailInstance, mountNode);
