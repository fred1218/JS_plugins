`<GoTop>` 组件，显示一个链接，点击滚动到窗口顶部，原[回到顶部](http://amazeui.org/widgets/gotop?_ver=2.x) React 封装。

属性：

- `theme`: `string` - 主题名称
- `title`: `string` - 显示的文字
- `src`: `string` - 自定图标的地址
- `icon`: `string` - FontAwesome 图标名称，如果定义了 `src`，则优先使用 `src`，此属性将被忽略
- `autoHide`: `bool` - 是否自动隐藏回到顶部图标，仅在 `fixed` 主题中有效
