`<Tabs>`，多标签组件容器，包含以下属性：

- `defaultActiveKey`: `any` - 默认激活的标签页的 `eventKey`；
- `animation`: `string` - ['fade'|'slide'] 动画效果。
- `justify`: `bool` 标题宽度自适应；
- `onSelect`: `func` 点击标签时回掉函数。

`<Tabs.Item>`，标签面板，包含以下属性：

- `title`: `string` - 标题；
- `disabled`: `bool` - 是否禁用；
- `eventKey`: `any` - 事件处理识别 key，如果 `defaultActiveKey` 等于 `eventKey`，则当前标签页激活。
