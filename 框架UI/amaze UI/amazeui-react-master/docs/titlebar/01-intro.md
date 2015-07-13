`<Gallery>` 组件，图片列表。

属性：

- `theme`: `string` - 主题名称，`default | multi | cols`
- `title`: `string` - 标题
- `href`: `string` - 标题链接，可不设
- `nav`: `array` - 附加链接数据

`nav` 数据格式：

```js
var nav = [          // 右侧附加链接，可以为多个
  {
    "link": "",
    "title": ""
  }
];
```
