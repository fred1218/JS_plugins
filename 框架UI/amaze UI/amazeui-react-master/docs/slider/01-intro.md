`<Slider>` 组件，轮播容器，包含以下属性：

- `theme`: `string` - 主题名称；
- `directionNav`: `bool` - 是否显示上一个、下一个图标，默认为 `true`；
- `controlNav`: `bool` - 是否显示点击控制点；
- `slideSpeed`: `number` - 播放速度，默认为 `5000` （ms）；
- `autoPlay`: `bool` - 是否自动播放，默认为 `true`；
- `defaultActiveIndex`: `number` - 默认激活的幻灯片编号，从 `0` 开始计算；
- `onSelect`: `func` - 切换幻灯片回掉函数，接受两个参数，第一个参数为激活的幻灯片编号，第二参数为滚动方向。

`<Slider.Item>` 组件，幻灯片内容，包含以下属性：

- `thumbnail`: `string` - 缩略略图 URL。
