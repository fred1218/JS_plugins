var cutstomIcon = <img src="http://cdn.amazeui.org/assets/i/brand/amazeui-cw.png" />;

var props = {
  title: cutstomIcon,
  data: {
    left: [
      {
        link: "#left-link",
        icon: "home",
        customIcon: "data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 20\"><path d=\"M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z\" fill=\"%23fff\"/></svg>"
      }
    ],
    right: [
      {
        link: "#right-link",
        customIcon: "data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 42 26\" fill=\"%23fff\"><rect width=\"4\" height=\"4\"/><rect x=\"8\" y=\"1\" width=\"34\" height=\"2\"/><rect y=\"11\" width=\"4\" height=\"4\"/><rect x=\"8\" y=\"12\" width=\"34\" height=\"2\"/><rect y=\"22\" width=\"4\" height=\"4\"/><rect x=\"8\" y=\"23\" width=\"34\" height=\"2\"/></svg>"
      }
    ]
  }
};

React.render(<Header {...props} />, mountNode);
