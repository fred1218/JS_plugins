var tableInstance = (
  <Table bordered compact striped>
    <thead>
    <tr>
      <th>网站名称</th>
      <th>网址</th>
      <th>创建时间</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td>Amaze UI</td>
      <td>http://amazeui.org</td>
      <td>2012-10-01</td>
    </tr>
    <tr className="am-active">
      <td>Amaze UI(Active)</td>
      <td>http://amazeui.org</td>
      <td>2012-10-01</td>
    </tr>
    <tr>
      <td>Amaze UI</td>
      <td>http://amazeui.org</td>
      <td>2012-10-01</td>
    </tr>
    </tbody>
  </Table>
);

React.render(tableInstance, mountNode);
