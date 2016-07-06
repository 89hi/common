/**
 * by zada
 * 2016-7-4 16:04:26
 */
'use strict';

module.exports = function(date) {
  /*对于 yy-mm-dd yy/mm/dd yy.mm.dd的字符串的一个补全*/
  function completeStr(str) {
    var reg = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/;
    if (reg.test(str)) {
      return '20' + str;
    }
    return str;
  }
  var instance;
  date = completeStr(date);
  // console.log('date:',date)
  if (date)
    instance = new Date(date);
  else
    instance = new Date();



  function msToMin(ms) {
    return parseInt(ms / 1000 / 60);
  }

  instance.format = function(fmt) {
    var o = {
      'M+': this.getMonth() + 1, //月份
      'd+': this.getDate(), //日 
      'h+': this.getHours(), //  小时
      'm+': this.getMinutes(), //分
      's+': this.getSeconds(), //秒
      'q+': Math.floor((this.getMonth() + 3) / 3), //季度
      'S': this.getMilliseconds(), //毫秒
      'T': 'T'
    };


    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      }
    }
    return fmt
  }

  /*获得当前的UTC时间戳*/
  instance.getTimeUTC = function() {
    return this.getTime() + this.getTimezoneOffset() * 60 * 1000;
  }

  /*根据当前的时区 转到其他的时区
     tzo 原时区 -12~13
     tzn 目标时区 -12~13 默认为当前时区
  */
  instance.changeTimezone = function(tzo, tzn) {
    tzo = tzo * 60;
    tzn = (tzn != undefined) ? tzn * 60 : -this.getTimezoneOffset();
    this.setTime(this.getTime() - (tzo - tzn) * 60 * 1000);
  }

  instance.getzoneOffset = function() {
    return this.getTimezoneOffset();
  }
  /*
   根据距离当前时间的长度来决定显示的字符
   t 所要比较的时间 unix timestamp (UTC)
   n 作为标准的时间，默认为现在时刻 unix timestamp (UTC)
   如果
  */
  instance.derTime = function(t, n) {
    var n = n ? n : this.getTimeUTC();
    var ba = '',
      res = '',
      der = 0;
    der = msToMin(n - t);
    ba = (der > 0) ? '前' : '后';
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

  return instance;
}
