`<Header>` 组件，页面头部。

属性：

- `theme`: `string` - 主题名称
- `data`: `array` - 左右厕链接数据
- `title`: `string` - 标题
- `link`: `link` - 链接

数据格式：

```js
var data = {
  "left": [
    {
      "link": "",         // url : http://xxx.xxx.xxx
      "title": "",        // 链接标题
      "icon": "",         // 字体图标名称: 使用 Amaze UI 字体图标 http://www.amazeui.org/css/icon
      "customIcon": ""    // 自定义图标 URL，设置此项后当前链接不再显示 icon
    }
  ],

  "right": [ // 右侧字段含义同左侧
    {
      "link": "",
      "title": "",
      "icon": "",
      "customIcon": ""
    }
  ]
};
```
