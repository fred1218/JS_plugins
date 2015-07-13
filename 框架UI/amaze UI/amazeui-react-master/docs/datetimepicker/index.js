'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;

var examples = {
  basic: fs.readFileSync(__dirname + '/01-basic.js', 'utf-8'),
  theme: fs.readFileSync(__dirname + '/02-theme.js', 'utf-8'),
  format: fs.readFileSync(__dirname + '/03-format.js', 'utf-8'),
  viewMode: fs.readFileSync(__dirname + '/04-view-mode.js', 'utf-8'),
  minViewMode: fs.readFileSync(__dirname + '/05-min-view-mode.js', 'utf-8'),
  disabled: fs.readFileSync(__dirname + '/06-disabled.js', 'utf-8'),
  weekStart: fs.readFileSync(__dirname + '/07-week-start.js', 'utf-8'),
  alone: fs.readFileSync(__dirname + '/08-alone.js', 'utf-8'),
  language: fs.readFileSync(__dirname + '/09-language.js', 'utf-8'),
  dateTimePicker: fs.readFileSync(__dirname + '/10-date-time-picker.js', 'utf-8'),
  onClose: fs.readFileSync(__dirname + '/11-onClose.js', 'utf-8')
};

var DateTimePickerDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>DateTimePicker</h1>
        <hr/>
        <h2>基础使用</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h3>基本样式</h3>
        <p>默认当前时间，可以通过 <code>dateTime</code> 设置日期</p>
        <ReactBin code={examples.basic} />

        <h3>更改颜色</h3>
        <Markdown>{require('./02-theme.md')}</Markdown>
        <ReactBin code={examples.theme} />

        <h3>日期格式</h3>
        <Markdown>{require('./03-format.md')}</Markdown>
        <ReactBin code={examples.format} />

        <h3>视图模式</h3>
        <Markdown>{require('./04-view-mode.md')}</Markdown>
        <ReactBin code={examples.viewMode} />

        <h3>限制视图</h3>
        <Markdown>{require('./05-min-view-mode.md')}</Markdown>
        <ReactBin code={examples.minViewMode} />

        <h3>禁用日期</h3>
        <Markdown>{require('./06-disabled.md')}</Markdown>
        <ReactBin code={examples.disabled} />

        <h3>星期开始设置</h3>
        <p><code>weekStart</code>: <code>number</code> 默认为 0 ，周循环以周日开始，周六结束，设置 1 则以周一开始。</p>
        <ReactBin code={examples.weekStart} />

        <h3>禁用日期</h3>
        <Markdown>{require('./08-alone.md')}</Markdown>
        <ReactBin code={examples.alone} />

        <h3>语言设置</h3>
        <ReactBin code={examples.language} />

        <h2>进阶使用</h2>
        <h3>内联调用</h3>
        <ReactBin code={examples.dateTimePicker} />

        <h3>onClose</h3>
        <ReactBin code={examples.onClose} />
      </Doc>
    );
  }
});

module.exports = DateTimePickerDoc;
