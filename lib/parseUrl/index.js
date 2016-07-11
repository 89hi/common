/**
 * by mochen
 * 2016-7-1 16:04:26
 */
'use strict';

var parseUrl = function(url) {
  var tmp = {},
    match = url.match(/\?[^#]*/);
  if (!match || match[0].length === 1) {
    return tmp;
  }
  var paramArr = match[0].slice(1).split('&');
  paramArr.forEach(function(item) {
    var match = item.split('='),
      key = match[0],
      value = decodeURIComponent(match[1] || '');
    tmp[key] = value;
  });
  return tmp;
}

module.exports = parseUrl;