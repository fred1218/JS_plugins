此部分演示是原 [Web 组件中的 Pagination](http://amazeui.org/widgets/pagination?_ver=2.x) 的实现。

可以传递一下属性：

- `theme`: `string` - 主题，`default | select`；
- `data`: `object` - 数据。

数据格式：

```js
var data = {
  "prevTitle": "上一页",  // 上一页文字
  "prevLink": "#",        // 上一页链接

  "nextTitle": "下一页",  // 下一页文字
  "nextLink": "#",        // 下一页链接

  "firstTitle": "第一页", // 第一页文字
  "firstLink": "#",       // 第一页链接

  "lastTitle": "最末页",  // 最后一页文字
  "lastLink": "#",        // 最后一页链接

  "pages": [
    {
      "title": "1",
      "link": "#"
    },
    {
      "title": "2",
      "link": "#"
    }
  ]
};
```
