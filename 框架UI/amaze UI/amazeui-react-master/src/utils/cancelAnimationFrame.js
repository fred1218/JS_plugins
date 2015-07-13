'use strict';

module.exports = global.cancelAnimationFrame ||
  global.webkitCancelAnimationFrame ||
  global.webkitCancelRequestAnimationFrame ||
  global.mozCancelAnimationFrame ||
  global.clearTimeout;
