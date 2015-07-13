var data = [{"id":"24213414","title":"江湖民谣双专场","category":"小型现场","loc":"北京","begin":"2015-05-06 21:00:00", "disabled": 1},{"id":"24213108","title":"读火乐队 江湖专场演出","category":"小型现场","loc":"北京","begin":"2015-05-01 14:00:00"},{"id":"24213010","title":"音乐学习公开课活动","category":"小型现场","loc":"北京","begin":"2015-04-28 10:00:00"},{"id":"24211259","title":"邓丽君金曲盛燕专场演唱会","category":"演唱会","loc":"北京","begin":"2015-05-22 19:30:00"},{"id":"24211196","title":"伍佰2015北京演唱会","category":"演唱会","loc":"北京","begin":"2015-06-20 19:30:00", "highlight": 1}];

var EventRow = React.createClass({
  render: function() {
    var event = this.props.event;
    var className = event.highlight ? 'am-active' :
      event.disabled ? 'am-disabled' : '';

    return (
      <tr className={className}>
        <td>{event.title}</td>
        <td>{event.category}</td>
        <td>{event.loc}</td>
        <td>{event.begin}</td>
      </tr>
    );
  }
});

var EventsTable = React.createClass({
  render: function() {
    return (
      <Table {...this.props}>
        <thead>
          <tr>
            <th>名称</th>
            <th>类型</th>
            <th>地点</th>
            <th>开始时间</th>
          </tr>
        </thead>
        <tbody>
          {this.props.events.map(function(event) {
            return (<EventRow key={event.id} event={event} />);
          })}
        </tbody>
      </Table>
    );
  }
});

React.render(<EventsTable events={data} responsive bordered />, mountNode);
