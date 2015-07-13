var props = {
  title: "Amaze UI",
  data: {
    left: [
      {
        link: "#left-link",
        icon: "home"
      },
      {
        link: "#phone-link",
        icon: "phone"
      }
    ],
    right: [
      {
        link: "#user-link",
        icon: "user"
      },
      {
        link: "#cart-link",
        icon: "shopping-cart"
      }
    ]
  }
};

React.render(<Header {...props} />, mountNode);
