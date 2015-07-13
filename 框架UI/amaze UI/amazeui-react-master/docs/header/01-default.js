var props = {
  "title": "Amaze UI",
  "link": "#title-link",
  data: {
    "left": [
      {
        "link": "#left-link",
        "icon": "home"
      }
    ],
    "right": [
      {
        "link": "#right-link",
        "icon": "bars"
      }
    ]
  }
}

React.render(<Header {...props} />, mountNode);
