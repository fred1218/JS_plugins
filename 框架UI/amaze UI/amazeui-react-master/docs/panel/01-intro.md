`Panel` 共封装了两个 React 组件：

- `<Panel>`，属性说明：
 - `header`: `string` - 面板标题；
 - `footer`: `string` - 面板页脚，用于放置次要信息，页脚不会继承 `amStyle` 颜色样式；
 - `amStyle`: `string` - 面板颜色，默认为 `default`，可选 `primary` 、`secondary`、`success`、`warning`、`danger`；
 - `fill`: `bool` - 通常 `<Panel>` 子组件会被放入 `.am-panel-bd` 下，添加 `fill` 子组件会被渲染到 `.am-panel`。

- `<PanelGroup>` 将多个 `<Panel>` 放入面板群组里面。
