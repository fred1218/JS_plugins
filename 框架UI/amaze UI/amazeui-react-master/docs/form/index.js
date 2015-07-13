'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  basicForm: fs.readFileSync(__dirname + '/01-basic-form.js', 'utf-8'),
  disableField: fs.readFileSync(__dirname + '/02-disable-fieldset.js', 'utf-8'),
  horizontal: fs.readFileSync(__dirname + '/03-horizontal-form.js', 'utf-8'),
  inline: fs.readFileSync(__dirname + '/04-inline-form.js', 'utf-8'),
  withIcon: fs.readFileSync(__dirname + '/05-field-icon.js', 'utf-8'),
  fieldState: fs.readFileSync(__dirname + '/06-field-state.js', 'utf-8'),
  stateIcon: fs.readFileSync(__dirname + '/07-field-state-icon.js', 'utf-8'),
  sizes: fs.readFileSync(__dirname + '/08-field-sizes.js', 'utf-8'),
  fieldSet: fs.readFileSync(__dirname + '/09-field-set.js', 'utf-8'),
  groupBasic: fs.readFileSync(__dirname + '/10-group-basic.js', 'utf-8'),
  groupBtn: fs.readFileSync(__dirname + '/11-group-btn.js', 'utf-8'),
  groupSize: fs.readFileSync(__dirname + '/12-group-size.js', 'utf-8'),
  groupStyle: fs.readFileSync(__dirname + '/13-group-style.js', 'utf-8'),
  validation: fs.readFileSync(__dirname + '/14-validation.js', 'utf-8'),
  ucheck: fs.readFileSync(__dirname + '/15-ucheck.js', 'utf-8')
};

var FormDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Form 系列</h1>
        <hr/>
        <h2>组件介绍</h2>
        {<Markdown>{require('./0-intro.md')}</Markdown>}
        <h2>Form 元素使用演示</h2>
        <h3>基本使用</h3>
        <ReactBin code={examples.basicForm} />

        <h3>禁用内的元素</h3>
        <ReactBin code={examples.disableField} />

        <h3>水平排列</h3>
        <ReactBin code={examples.horizontal} />

        <h3>行内排列</h3>
        <ReactBin code={examples.inline} />

        <h3>表单域 Icon</h3>
        <ReactBin code={examples.withIcon} />

        <h3>验证提示</h3>
        <ReactBin code={examples.fieldState} />

        <h3>带图标的验证提示</h3>
        <ReactBin code={examples.stateIcon} />

        <h3>表单域大小</h3>
        <ReactBin code={examples.sizes} />

        <h3>表单集</h3>
        <ReactBin code={examples.fieldSet} />

        <h2>Input Group</h2>
        <h3>附加图标、文字</h3>
        <ReactBin code={examples.groupBasic} />

        <h3>附加按钮</h3>
        <ReactBin code={examples.groupBtn} />

        <h3>输入框组尺寸</h3>
        <ReactBin code={examples.groupSize} />

        <h3>输入框组样式</h3>
        <ReactBin code={examples.groupStyle} />

        <h2>Form 交互</h2>
        <h3>简单验证示例</h3>
        <ReactBin code={examples.validation} />

        <h3>表单验证</h3>
        <p>TODO: 将表单验证插件转为 React</p>

        <h3>UCheck</h3>
        <Markdown>{require('./15-ucheck.md')}</Markdown>
        <ReactBin code={examples.ucheck} />
      </Doc>
    );
  }
});

module.exports = FormDoc;
