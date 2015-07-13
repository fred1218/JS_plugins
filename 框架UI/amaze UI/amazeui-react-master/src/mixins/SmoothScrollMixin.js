/**
 * modified version of:
 * http://mir.aculo.us/2014/01/19/scrolling-dom-elements-to-the-top-a-zepto-plugin/
 */

'use strict';

var React = require('react');
var Events = require('../utils/Events');
var dom = require('../utils/domUtils');
var rAF = require('../utils/requestAnimationFrame');
var scrollInProgress = false;

var SmoothScrollMixin = {
  smoothScroll: function(element, options) {
    options = options || {};
    var scrollTarget = element || window;
    var targetY = options.position && parseInt(options.position, 10) || 0;
    var initialY = dom.scrollTop(scrollTarget);
    var lastY = initialY;
    var delta = targetY - initialY;
    // duration in ms, make it a bit shorter for short distances
    // this is not scientific and you might want to adjust this for
    // your preferences
    var speed = options.speed ||
      Math.min(750, Math.min(1500, Math.abs(initialY - targetY)));
    // temp variables (t will be a position between 0 and 1, y is the calculated scrollTop)
    var start;
    var t;
    var y;
    var cancelScroll = function() {
      abort();
    };

    // abort if already in progress or nothing to scroll
    if (scrollInProgress) {
      console.log(scrollInProgress);
      return;
    }

    if (delta === 0) {
      return;
    }

    // quint ease-in-out smoothing, from
    // https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js#L127-L136
    function smooth(pos) {
      if ((pos /= 0.5) < 1) {
        return 0.5 * Math.pow(pos, 5);
      }

      return 0.5 * (Math.pow((pos - 2), 5) + 2);
    }

    function abort() {
      Events.off(scrollTarget, 'touchstart', cancelScroll);
      scrollInProgress = false;
    }

    // when there's a touch detected while scrolling is in progress, abort
    // the scrolling (emulates native scrolling behavior)
    Events.on(scrollTarget, 'touchstart', cancelScroll);
    scrollInProgress = true;

    // start rendering away! note the function given to frame
    // is named "render" so we can reference it again further down
    rAF(function render(now) {
      if (!scrollInProgress) {
        return;
      }

      if (!start) {
        start = now;
      }

      // calculate t, position of animation in [0..1]
      t = Math.min(1, Math.max((now - start) / speed, 0));
      // calculate the new scrollTop position (don't forget to smooth)
      y = Math.round(initialY + delta * smooth(t));
      // bracket scrollTop so we're never over-scrolling
      if (delta > 0 && y > targetY) {
        y = targetY;
      }

      if (delta < 0 && y < targetY) {
        y = targetY;
      }
      // only actually set scrollTop if there was a change front he last frame
      if (lastY !== y) {
        dom.scrollTop(scrollTarget, y);
      }

      lastY = y;
      // if we're not done yet, queue up an other frame to render,
      // or clean up
      if (y !== targetY) {
        rAF(render);
      } else {
        abort();
      }
    });
  }
};

module.exports = SmoothScrollMixin;
