/**
 * by zada
 * 2016-7-4 16:04:26
 */
'use strict';

module.exports = function(date, fmt) {
  var nowDate = new Date(date);
  var o = {
    'M+': nowDate.getMonth() + 1, //月份
    'd+': nowDate.getDate(), //日 
    'h+': nowDate.getHours(), //  小时
    'm+': nowDate.getMinutes(), //分
    's+': nowDate.getSeconds(), //秒
    'q+': Math.floor((nowDate.getMonth() + 3) / 3), //季度
    'S': nowDate.getMilliseconds() //毫秒
  };

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (nowDate.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt
}