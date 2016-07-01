'use strict';

module.exports = function(url) {
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