'use strict';

var JSXTransformer = require('react/dist/JSXTransformer');

module.exports = {
  process: function(src, filename) {
    // Ignore all files within node_modules
    if (filename.indexOf('node_modules') === -1) {
      return JSXTransformer.transform(src).code;
    }

    return src;
  }
};
