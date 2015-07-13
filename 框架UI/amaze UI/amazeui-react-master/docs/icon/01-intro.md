Icon 组件目前使用 [Font Awesome](http://fontawesome.io/icons/) (4.3.0)。

使用方法：`<Icon icon="图标名称" />`，图标名称请从[这里](http://amazeui.org/css/icon?_ver=2.x)或者[Font Awesome 官网](http://fontawesome.io/icons/)查询。

属性说明：
- `icon`: `string` - 图标名称；
- `size`: `string` 提供 3 种大小 `sm` `md` `lg`；
- `button`: `bool` 是否显示为图标按钮；
- `amStyle`: `string` 提供 5 种颜色 `primary` `secondary` `success` `warning` `danger`，设置 `button` 属性后有效；
- `spin`: `bool` - 旋转动画(Chrome 和 Firefox 下， `display: inline-block;` 或 `display: block;` 的元素才会应用旋转动画)；
- `fw`: `bool` - FontAwesome 在绘制图标的时候不同图标宽度有差异， 添加 `fw` 将图标设置为固定的宽度，解决宽度不一致问题；
- `href`: `string` - 链接地址。
