/* eslint-disable */
var data = [
  {value: 'one', label: 'One'},
  {value: 'two', label: 'Two'},
  {value: 'three', label: 'Three'}
];

var props = {
  name: 'selected', // 注意设置 `name` 属性
  data: data,
  onChange: function(value) {
    console.log('当前值为：', value);
  }
};

var selectedInstance = (
  <form target="_blank">
    <p>选择一个值，然后提交表单试试</p>
    <Selected {...props} />
    <Button type="submit">提交</Button>
  </form>
);

React.render(selectedInstance, mountNode);
