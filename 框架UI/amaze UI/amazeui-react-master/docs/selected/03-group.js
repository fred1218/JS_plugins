var options = [
  {group: 'Some Group', value: 'one', label: 'One'},
  {group: 'Some Group', value: 'two', label: 'Two'},
  {group: 'Some Group', value: 'three', label: 'Three'},
  {group: 'Fruit', value: 'a', label: 'Apple'},
  {group: 'Fruit', value: 'b', label: 'Banana'},
  {group: 'Fruit', value: 'o', label: 'Orange'},
  {group: 'Fruit', value: 'm', label: 'Mango'}
];

var props = {
  data: options,
  onChange: function(value) {
    console.log('当前值为：', value);
  },
  multiple: true,
  maxHeight: 150,
  btnStyle: 'primary'
};

React.render(<Selected {...props} />, mountNode);
