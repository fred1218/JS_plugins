导航组件共封装了两个 React 组件：

- `<Nav>`: 为外层容器，对应 `.am-nav` ，默认渲染 `<ul>` 标签。属性说明：
	- `componentTag`: `string` - 可以接受 `ol` 字符串，渲染 `<ol>` 标签；
	- `pills`: `bool` - 开启水平导航；
	- `tabs`: `bool` - 开启标签式导航；
	- `justify`: `bool` - 在水平导航或标签式导航上添加 `justify` 让子组件宽度自适应。

- `<NavItem>`: 子组件，渲染 `<li>` 标签。属性说明：
	- `active`: `bool` - 是否激活；
	- `disabled`: `bool` - 是否禁用；
	- `header`: `bool` - 是否渲染为标题；
	- `divider`: `bool` - 是否渲染为分隔线；
	- `href`: `string` - 添加 `url` 地址，渲染成链接列表。
