'use strict';

var React = require('react');
var classNames = require('classnames');
var getScrollbarWidth = require('../utils/getScrollbarWidth');
var CSSCore = require('../utils/CSSCore');

module.exports = {
  setDimmerContainer: function() {
    var container = (this.props.container &&
      React.findDOMNode(this.props.container)) || document.body;
    var bodyPaddingRight = parseInt((container.style.paddingRight || 0), 10);
    var barWidth = getScrollbarWidth();

    if (barWidth) {
      container.style.paddingRight = bodyPaddingRight + barWidth + 'px';
    }

    CSSCore.addClass(container, this.setClassNamespace('dimmer-active'));
  },

  resetDimmerContainer: function(nextProps, nextState) {
    var container = (this.props.container &&
      React.findDOMNode(this.props.container)) || document.body;

    CSSCore.removeClass(container, this.setClassNamespace('dimmer-active'));

    container.style.paddingRight = '';
  },

  renderDimmer: function(children) {
    var onClick = this.handleDimmerClick || null;
    var classSet = {};

    classSet[this.setClassNamespace('dimmer')] = true;
    classSet[this.setClassNamespace('active')] = true;

    return (
      <div>
        <div
          onClick={onClick}
          ref="dimmer"
          style={{display: 'block'}}
          className={classNames(classSet)}></div>
        {children}
      </div>
    );
  }
};
