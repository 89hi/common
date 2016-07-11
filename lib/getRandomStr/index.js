/**
 * by mochen
 * 2016-7-11 11:45:27
 */
'use strict';

var getRandomStr = function(len) {
  len = len > 24 ? 24 : (len || 8);
  return Math.random().toString(36).substr(2, len);
}

module.exports = getRandomStr;