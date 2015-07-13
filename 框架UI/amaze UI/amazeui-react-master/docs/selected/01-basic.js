var data = [
  {value: 'one', label: 'One'},
  {value: 'two', label: 'Two'},
  {value: 'three', label: 'Three'}
];

var props = {
  data: data,
  onChange: function(value) {
    console.log('当前值为：', value);
  }
}
var selectedInstance = (
  <ButtonToolbar>
    <Selected {...props} />

    {/* 设置默认值 */ ' '}
    <Selected {...props} btnStyle="primary" value="one" />
  </ButtonToolbar>
);

React.render(selectedInstance, mountNode);
