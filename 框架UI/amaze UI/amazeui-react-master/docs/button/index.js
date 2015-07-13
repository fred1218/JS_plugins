'use strict';

var fs = require('fs');
var React = require('react');
var Button = require('../../src/Button');
var ButtonToolbar = require('../../src/ButtonToolbar');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  radius: fs.readFileSync(__dirname + '/02-radius.js', 'utf-8'),
  round: fs.readFileSync(__dirname + '/03-round.js', 'utf-8'),
  active: fs.readFileSync(__dirname + '/04-active.js', 'utf-8'),
  disable: fs.readFileSync(__dirname + '/05-disable.js', 'utf-8'),
  sizes: fs.readFileSync(__dirname + '/06-sizes.js', 'utf-8'),
  block: fs.readFileSync(__dirname + '/07-block.js', 'utf-8'),
  icon: fs.readFileSync(__dirname + '/08-icon.js', 'utf-8'),
  group: fs.readFileSync(__dirname + '/09-group.js', 'utf-8'),
  toolbar: fs.readFileSync(__dirname + '/10-toolbar.js', 'utf-8'),
  groupSizes: fs.readFileSync(__dirname + '/11-goup-sizes.js', 'utf-8'),
  groupStacked: fs.readFileSync(__dirname + '/12-goup-stacked.js', 'utf-8'),
  groupJustify: fs.readFileSync(__dirname + '/13-goup-justify.js', 'utf-8'),
  loadingButton: fs.readFileSync(__dirname + '/14-loading-button.js', 'utf-8'),
  checkButton: fs.readFileSync(__dirname + '/15-check-button.js', 'utf-8')
};

var ButtonDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Button 系列</h1>
        <hr/>
        <p>按钮系列组件包括 Button、ButtonGroup、ButtonGroup 等。</p>

        <h2>Button</h2>
        <Markdown>
          {require('./01-intro.md')}
        </Markdown>

        <h3>默认样式</h3>
        <ReactBin code={examples.basic}/>

        <h3>圆角</h3>
        <ReactBin code={examples.radius}/>

        <h3>椭圆</h3>
        <ReactBin code={examples.round}/>

        <h3>激活状态</h3>
        <ReactBin code={examples.active}/>
        <h3>禁用状态</h3>
        <ReactBin code={examples.disable}/>

        <h3>按钮尺寸</h3>
        <ReactBin code={examples.sizes}/>

        <h3>块级显示</h3>
        <ReactBin code={examples.block}/>

        <h3>结合 Icon</h3>
        <ReactBin code={examples.icon}/>
        <hr/>
        <h2>Button Group</h2>
        <Markdown>
          {require('./09-group.md')}
        </Markdown>

        <h3>基本按钮组</h3>
        <ReactBin code={examples.group}/>

        <h3>按钮工具栏</h3>
        <ReactBin code={examples.toolbar}/>

        <h3>按钮组尺寸</h3>
        <ReactBin code={examples.groupSizes}/>

        <h3>垂直排列</h3>
        <ReactBin code={examples.groupStacked} />

        <h3>宽度自适应</h3>
        <ReactBin code={examples.groupJustify} />

        <h2>按钮交互</h2>
        <h3>按钮加载状态</h3>
        <ReactBin code={examples.loadingButton} />
        <h3>按钮式单选/复选框</h3>
        <ReactBin code={examples.checkButton} />
      </Doc>
    );
  }
});

module.exports = ButtonDoc;
