var options = [
  {value: 'one', label: 'One'},
  {value: 'two', label: 'Two'},
  {value: 'three', label: 'Three'},
  {value: 'a', label: 'Apple'},
  {value: 'b', label: 'Banana'},
  {value: 'o', label: 'Orange'},
  {value: 'm', label: 'Mango'}
];

var props = {
  data: options,
  onChange: function(value) {
    console.log('当前值为：', value);
  },
  multiple: true,
  maxHeight: 150,
  btnStyle: 'secondary'
};

var selectedInstance = (
  <div>
    <Selected {...props} />

    {/* 设置默认值 */' '}
    <Selected {...props} btnStyle="warning" value="one,o" />
  </div>
);

React.render(selectedInstance, mountNode);
