/**
 * by zada
 * 2016-7-4 16:04:26
 */
'use strict';

function msToMin(ms) {
  return parseInt(ms / 1000 / 60);
}


module.exports = function(n, t) { //n为需要比较的时间 t为被比较的时间
  var ba = '',
    res = '',
    der = 0;
  t = t || (new Date()).getTime();
  der = msToMin(n - t);
  ba = (der > 0) ? '后' : '前';
  der = Math.abs(der);
  if (der === 0) {
    res = '刚刚';
  } else if (0 < der && der < 60) {
    res = der + '分钟' + ba;
  } else if (60 <= der && der < 24 * 60) {
    var min = der % 60 == 0 ? '' : String(der % 60) + '分钟';
    res = String(parseInt(der / 60)) + '小时' + min + ba;
  } else if (der >= 24 * 60 && der < 24 * 60 * 31) {
    res = String(parseInt(der / 60 / 24)) + '天' + ba;
  } else if (der >= 24 * 60 * 31 && der < 24 * 60 * 365) {
    res = String(parseInt(der / 60 / 24 / 31)) + '个月' + ba;
  } else if (der >= 24 * 60 * 365) {
    res = String(parseInt(der / 60 / 24 / 365)) + '年' + ba;
  }
  return res;
}
