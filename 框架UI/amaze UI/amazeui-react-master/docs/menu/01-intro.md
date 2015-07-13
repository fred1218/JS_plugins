`<Menu>` 菜单组件（原策划菜单被移除，暂无动画效果）。

**请将窗口缩小至 `640px` 以下查看演示。**

属性：

- `theme`: `string` - 主题名称， `'default' | 'dropdown1' | 'dropdown2' |
  'slide1' | 'stack'`；
- `data`: `array` - 数据；
- `cols`: `string` - 一级菜单列数（对 `dropdown1` 主题无效）；
- `onSelect`: `func` - 点击时的处理函数，第一个参数为点击链接的数据对象，第二个参数为点击链接数据在 `data` 中的索引，第三个参数为 `event` 对象。

针对 `'dropdown1' | 'dropdown2' | 'slide1'` 主题的属性：

- `toggleTitle`: `string` - 触发按钮文字，默认为空；
- `toggleIcon`: `string` - 触发按钮名称，默认为 `bars`。

数据格式：

```js
var data = [
  {
    "title": "",            // 一级菜单标题
    "link": "",             // 一级菜单链接
    "subMenu": [
      {                   // 二级菜单
        "title": "",    // 二级菜单标题
        "link": "",     // 二级菜单链接
        "target": ""
      }
    ],
    "subCols": 3            // 设置二级菜单列数
  }
];
```
