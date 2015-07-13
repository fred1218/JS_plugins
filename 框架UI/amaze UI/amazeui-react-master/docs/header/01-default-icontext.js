var props = {
  "title": "Amaze UI",
  data: {
    "left": [
      {
        "link": "#left-link",
        "title": "首页",
        "icon": "home"
      }
    ],
    "right": [
      {
        "link": "#right-link",
        "icon": "bars",
        "title": "菜单"
      }
    ]
  }
};

React.render(<Header {...props} />, mountNode);
