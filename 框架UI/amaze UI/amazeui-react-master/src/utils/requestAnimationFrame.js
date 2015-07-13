/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * modified version of:
 * https://github.com/facebook/react/blob/0.13-stable/src/vendor/core/requestAnimationFrame.js
 */

'use strict';

var nativeRAF = global.requestAnimationFrame ||
  global.webkitRequestAnimationFrame ||
  global.mozRequestAnimationFrame;

var lastTime = 0;

var requestAnimationFrame = nativeRAF ||
  function(callback) {
    var currTime = Date.now();
    var timeDelay = Math.max(0, 16 - (currTime - lastTime));

    lastTime = currTime + timeDelay;
    return global.setTimeout(function() {
      callback(Date.now());
    }, timeDelay);
  };

// Works around a rare bug in Safari 6 where the first request is never invoked.
requestAnimationFrame(function() {});

module.exports = requestAnimationFrame;
