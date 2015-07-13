var badgeInstance = (
  <div>
    <Badge>default</Badge>
    <Badge amStyle="primary" className="am-text-sm">small</Badge>
    <Badge amStyle="secondary" className="am-text-default">normal</Badge>
    <Badge amStyle="success" className="am-text-lg">large</Badge>
    <Badge amStyle="warning" className="am-text-xl">x large</Badge>
  </div>
);

React.render(badgeInstance, mountNode);
