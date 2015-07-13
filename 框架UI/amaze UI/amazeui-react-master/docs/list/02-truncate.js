var listInstance = (
  <div>
    <List static>
      <ListItem truncate>
        走在风中 今天阳光 突然好温柔
      </ListItem>
      <ListItem truncate>
        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂 天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂</ListItem>
    </List>
    <List>
      <ListItem truncate href="http://www.amazeui.org">
        走在风中 今天阳光 突然好温柔
      </ListItem>
      <ListItem truncate href="http://www.amazeui.org">
        天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂 天边风光 身边的我 都不在你眼中 你的眼中 藏着什么 我从来都不懂
      </ListItem>
    </List>
  </div>
);

React.render(listInstance, mountNode);
