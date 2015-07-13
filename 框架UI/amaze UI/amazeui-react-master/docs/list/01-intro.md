列表组件共封装两个 React 组件：

- `<List>`: 为外层容器，对应 `.am-list` ，默认渲染 `<ul>` 标签。属性说明：
	- `componentTag`: `string` - 可以接受 `ol` 字符串，渲染 `<ol>` 标签；
	- `static`: `bool` - 如果内容为纯文字列表，需要增加该属性；
	- `border`: `bool` - 为 `list` 添加边框；
	- `striped`: `bool` - 为 `list` 添加斑马纹。

- `<ListItem>`: 子组件，渲染 `<li>` 标签。属性说明：
	- `truncate`: `bool` - 单行截断，文字超出一行时截断为 `...`；
	- `href`: `string` - 添加 `url` 地址，渲染成链接列表。
