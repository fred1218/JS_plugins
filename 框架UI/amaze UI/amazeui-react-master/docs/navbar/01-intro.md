`<Navbar>` 组件，页面底部导航条（原二维码、响应式、自动收缩为列表功能已不再内容）。

属性：

- `theme`: `string` - 主题名称
- `data`: `array` - 数据
- `onSelect`: `func` - 点击时的处理函数，第一个参数为点击的链接，第二个参数为 `event` 对象

数据格式：

```js
var data = [
  {
    "title": "", // title 值：要显示的文本
    "link": "", // link 值 ：链接地址，电话则写 "tel:0101245678"
    "customIcon": "", // 自定义图标图片地址
  }
];
```
