'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  setActive: fs.readFileSync(__dirname + '/02-setActive.js', 'utf-8'),
  select: fs.readFileSync(__dirname + '/03-select.js', 'utf-8'),
  justify: fs.readFileSync(__dirname + '/04-justify.js', 'utf-8'),
  animation: fs.readFileSync(__dirname + '/05-animation.js', 'utf-8'),
  data: fs.readFileSync(__dirname + '/06-data.js', 'utf-8'),
  d2: fs.readFileSync(__dirname + '/06-data-d2.js', 'utf-8')
};

var TabsDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Tabs</h1>
        <hr/>
        <h2>组件介绍</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h2>使用演示</h2>
        <h3>基本样式</h3>
        <ReactBin code={examples.basic} />

        <h3>默认选中与禁用</h3>
        <p>设置<code>defaultActiveKey</code> 的值与 <code>eventKey</code> 值相等时，则默认激活该选项卡。</p>
        <p>在<code>Tabs.Item</code> 增加 <code>disabled</code> 属性禁用该标签页。</p>
        <ReactBin code={examples.setActive} />

        <h3>回掉函数</h3>
        <ReactBin code={examples.select} />

        <h3>宽度自适应</h3>
        <ReactBin code={examples.justify} />

        <h3>设置动画</h3>
        <ReactBin code={examples.animation} />

        <h3>原 Web 组件中数据接口</h3>
        <Markdown>{require('./06-data.md')}</Markdown>
        <h4>默认主题</h4>
        <ReactBin code={examples.data} />

        <h4>d2 主题</h4>
        <ReactBin code={examples.d2} />
      </Doc>
    );
  }
});

module.exports = TabsDoc;
