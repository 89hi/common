/**
 * by zada
 * 2016-7-4 16:04:26
 */
'use strict';

var formatter = function(str, fmt) {
  fmt = fmt || 'yyyy-MM-dd hh:mm:ss';
  var date = new Date(str),
    rules = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日 
      'h+': date.getHours(), //  小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      'S': date.getMilliseconds(), //毫秒
      'T': 'T'
    };
  if (/(y+)/i.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var key in rules) {
    if (new RegExp("(" + key + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (rules[key]) : (("00" + rules[key]).substr(("" + rules[key]).length)));
    }
  }
  return fmt;
}

module.exports = formatter;