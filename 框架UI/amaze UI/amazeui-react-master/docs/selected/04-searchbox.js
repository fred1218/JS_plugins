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
  btnStyle: 'success',
  searchBox: true
};

var myFilter = function(filterText, option) {
  // 无论用户输入毛过滤字符，都只匹配值为 `one` 项
  return (option.value === 'one');
};

var selectedInstance = (
  <div>
    <Selected {...props} />

    {/* 自定义过滤函数 */ ' '}
    <Selected {...props} optionFilter={myFilter} btnStyle="danger" />
  </div>
);

React.render(selectedInstance, mountNode);
