弹出层需要 `<Popover>`、`<PopoverTrigger>` 结合使用。

`<Popover>` 组件，弹出层，含以下属性：

- `placement`: `string` - 显示位置 `left`、`right`、`top`、`bottom`
- `positionLeft`: `number` - 左边定位
- `positionTop`: `number` - 顶部定位
- `amStyle`: `string` - popover 样式，可选值为 `primary`、`secondary`、`success`、`warning`、`danger`
- `amSize`: `number` - popover 大小，可选值为 `lg`、`sm`


`<PopoverTrigger>` 组件，Popover 触发器。

- `trigger`: `string|array` - 触发 popover 的形式，`click`、`focus`、`click`，默认为 `[`focus`, `click`]`；
- `placement`: `string` 位置，`left`、`right`、`top`、`bottom`，**必须设置**；
- `amStyle`: `string` - popover 样式，可选值为 `primary`、`secondary`、`success`、`warning`、`danger`；
- `amSize`: `number` - popover 大小，可选值为 `lg`、`sm`。

`placement`、`amStyle`、`amSize` 该属性会传递到 `<Popover>` 上。如果 `<PopoverTrigger>` 设置了，`<Popover>` 就不用再设置。
