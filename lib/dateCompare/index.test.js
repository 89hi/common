/**
 * by zada
 * 2016-7-4 16:04:43
 */
'use strict';

var dateCompare = require('./index.js');
var expect = require('chai').expect;

describe(' dateCompare 测试', function() {
  var case_data = {
    'dateCompare hour ': {
      param: {
        date1: 1467660141105,
        date2: 1467627741105
      },
      result: '9小时后'
    },
    'dateCompare day ': {
      param: {
        date1: 1467717741105,
        date2: 1467627741105
      },
      result: '1天后'
    },
    'dateCompare just ': {
      param: {
        date1: 1467627741105,
        date2: 1467627741105
      },
      result: '刚刚'
    },
    'dateCompare minute ': {
      param: {
        date1: 1467627000000,
        date2: 1467627741105
      },
      result: '12分钟前'
    },
    'dateCompare month ': {
      param: {
        date1: 1470306141105,
        date2: 1467627741105
      },
      result: '1个月后'
    },
    'dateCompare year ': {
      param: {
        date1: 1499163741105,
        date2: 1467627741105
      },
      result: '1年后'
    }
  }


  for (var name in case_data) {
    (function(nameP) {
      it(nameP + ' 返回' + JSON.stringify(case_data[nameP].result), function() {
        var result = dateCompare(case_data[nameP].param.date1, case_data[nameP].param.date2);
        console.log('result:', nameP, result, case_data[nameP].result);
        expect(result).to.be.deep.equal(case_data[nameP].result);
      });
    })(name);
  }

})