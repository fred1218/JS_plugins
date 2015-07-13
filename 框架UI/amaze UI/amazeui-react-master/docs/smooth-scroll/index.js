'use strict';

var fs = require('fs');
var React = require('react');
var ReactBin = require('../ReactBin');
var Markdown = require('../utils').Markdown;
var Doc = require('../utils').Doc;
var examples = {
  default: fs.readFileSync(__dirname + '/01-default.js', 'utf-8'),
  others: fs.readFileSync(__dirname + '/02-others.js', 'utf-8'),
  scrollTo: fs.readFileSync(__dirname + '/03-scroll-to.js', 'utf-8')
};

var AccordionDoc = React.createClass({
  render: function() {
    return (
      <Doc>
        <h1>Smooth Scroll 封装</h1>
        <hr/>
        <h2>GoTop 组件</h2>
        <Markdown>{require('./01-intro.md')}</Markdown>
        <h3>默认主题</h3>
        <ReactBin code={examples.default} />

        <h3>fixed 主题</h3>
        <ReactBin code={examples.others} />

        <h2>SmoothScrollMixin</h2>
        <p>平滑滚动主函数封装在 <code>SmoothScrollMixin</code> 中，可以根据实际需求封装组件并调用之。</p>
        <ReactBin code={examples.scrollTo} />
      </Doc>
    );
  }
});

module.exports = AccordionDoc;
