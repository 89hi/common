/**
 * by zada
 * 2016-7-4 16:04:43
 */
'use strict';

var dateFormatter = require('./index.js');
var expect = require('chai').expect;

describe(' dateFormatter 测试', function() {
  var case_data = {
    'timeSecondsFormatter': {
      param: {
        date: 1467627741105,
        format: 'yyyy-MM-dd'
      },
      result: '2016-07-04'
    },
    'dateFormatter': {
      param: {
        date: new Date(1467627741105),
        format: 'yyyy-MM-dd'
      },
      result: '2016-07-04'
    },
    'stringFormmater': {
      param: {
        date: 'Mon Jul 04 2016 18:22:21 GMT+0800 (CST)',
        format: 'yyyy-MM-dd'
      },
      result: '2016-07-04'
    },
    'timeSecondsFormatterDetail': {
      param: {
        date: 1467627741105,
        format: 'yyyy-MM-dd hh:mm:ss'
      },
      result: '2016-07-04 18:22:21'
    },
    'timeSecondsFormatterDetailSingle': {
      param: {
        date: 1467627741105,
        format: 'yyyy-M-d h:m:s'
      },
      result: '2016-7-4 18:22:21'
    },
    'timeSecondsFormatter hh:mm:ss': {
      param: {
        date: 1467627741105,
        format: 'hh:mm:ss'
      },
      result: '18:22:21'
    },
    'stringFormmaterAddT': {
      param: {
        date: 'Mon Jul 04 2016 18:22:21 GMT+0800 (CST)',
        format: 'yyyy-M-dTh:m:s'
      },
      result: '2016-7-4T18:22:21'
    }
  }


  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      expect(dateFormatter(case_data[name].param.date, case_data[name].param.format)).to.be.deep.equal(case_data[name].result);
    });
  }

});