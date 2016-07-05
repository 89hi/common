/**
 * by iwuly
 * 2016-7-5 23:01:26
 */
'use strict';

module.exports = function(fn) {
  return !!fn && typeof fn != "string" && !fn.nodeName && fn.constructor != Array && /^[\s[]?function/.test(fn + "");
}

