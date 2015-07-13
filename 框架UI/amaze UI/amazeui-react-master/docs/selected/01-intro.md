`<Selected>` 组件，模拟 `<select>` （`<select>` 长得丑就算了，还不然别人打扮，只能用写一个类似功能的组件了）。

属性说明：

- `data`: `array` - 选项数据，必须设置，格式为 `{value: 'one', label: 'One'}`；
- `placeholder`: `string` - 没有选中项时显示的文字，默认为 `点击选择...`；
- `value`: `string` - 默认值，多个值使用 `,` 分隔，必须与 `data` 中某一项的 `value` 对应；
- `name`: `string` - 保存值的隐藏 `<input>` 字段名称；
- `multiple`： `bool` - 是否为多选；
- `onChange`: `func` - 值发生变化时的回调函数，接受一个参数，参数值组件当前的值；
- `optionFilter`: `func` - 选项过滤函数，符合条件返回 `true`，接受两个参数 `(filterText, option)`， `filterText` 为用户输入的过滤字符，`option` 为要判断的选项；
- `btnStyle`: `string` - 按钮风格；
- `btnWidth`: `number` - 设置按钮宽度；
- `maxHeight`: `number` - 设置下拉的选项的最大高度；
- `searchBox`:  `bool` - 是否显示过滤搜索框。
