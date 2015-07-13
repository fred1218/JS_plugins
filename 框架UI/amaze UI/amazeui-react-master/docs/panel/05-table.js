var panelInstance = (
  <Panel header="面板标题">
    面板内容
    <Table fill>
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
      <tr>
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
  </Panel>
);

React.render(panelInstance, mountNode);
