// IE8 polyfill

'use strict';

if (!Date.now) {
  Date.now = function() {
    return new Date().getTime();
  };
}
