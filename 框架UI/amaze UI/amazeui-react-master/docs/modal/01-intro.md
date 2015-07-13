弹出层需要 `<Modal>`、`<ModalTrigger>` 结合使用。

`<Modal>` 组件，弹出层，含以下属性：

- `type`: `string` - Modal 类型；
- `title`: `string` - Modal 标题；
- `closeIcon`: `bool` - 是否显示右上角关闭按钮，默认为 `true`（对 `alert`、`confirm`、`prompt` 无效）；
- `closeViaDimmer`: `bool` - 点击遮罩层是否关闭 Modal。


`<ModalTrigger>` 组件，Modal 触发器，含以下属性：

- `modal`: `node` - 要控制的 `<Modal>` 实例，**必需**；
- `onConfirm`: `func` - `<Modal>` 点击「确定」时的回调函数（适用于 Alert、Confirm、Prompt）；
- `onCancel`: `func` - `<Modal>` 点击「取消」时的回调函数（适用于 Confirm、Prompt）。
