'use strict';

var NAMESPACE = 'am';
var setNamespace = function(className) {
  return (NAMESPACE ? NAMESPACE + '-' : '') + className;
};

module.exports = {
  NAMESPACE: NAMESPACE,

  CLASSES: {
    active: setNamespace('active'),
    disabled: setNamespace('disabled'),
    round: setNamespace('round'),
    radius: setNamespace('radius'),
    square: setNamespace('square'),
    circle: setNamespace('circle'),
    divider: setNamespace('divider'),
    cf: setNamespace('cf'),
    fl: setNamespace('fl'),
    fr: setNamespace('fr')
  },

  STYLES: {
    default: 'default',
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    warning: 'warning',
    danger: 'danger'
  },

  SIZES: {

  }
};
