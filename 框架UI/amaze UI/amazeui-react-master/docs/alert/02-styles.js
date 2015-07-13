var alertContent = <p>没什么可给你，但求凭这阙歌。谢谢你风雨里，都不退愿陪着我。</p>;

var alertInstance = (
  <div>
    <Alert amStyle="secondary">{alertContent}</Alert>

    <Alert amStyle="success">{alertContent}</Alert>

    <Alert amStyle="warning">{alertContent}</Alert>

    <Alert amStyle="danger">{alertContent}</Alert>
  </div>
);

React.render(alertInstance, mountNode);
