`<ListNews>` 组件，用于显示文章（图文）列表。

属性：

- `theme`: `string` - 主题名称
- `data`: `array` - 数据
- `morePosition`: `oneOf(['top', 'bottom'])` - 「更多链接」显示位置；
- `moreText`: `string` - 「更多链接」文字；
- `thumbPosition`: `oneOf(['top', 'left', 'right', 'bottom-left',
  'bottom-right']` - 包含缩略图时缩略图的位置

数据格式：

```js
var data = {
   // 列表标题
  "header": {
    "title": "最新文章",
    "link": "###"
  },

  // 列表主要内容
  "main": [
    {
      "title": "",            // 新闻标题
      "link": "",             // 新闻链接
      "date": "",             // 日期
      "desc": "",             // 摘要信息
      "img": ""               // 缩略图地址
    }
  ]
};
```
