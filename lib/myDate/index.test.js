/**
 * by zada
 * 2016-7-4 16:04:43
 */
'use strict';

var dateFormatter = require('./index.js');
var MyDate = require('./index.js');
var expect = require('chai').expect;

// console.log('MyDate:',MyDate);
describe(' format 测试', function() {
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
    },
    'stringFormmaterComplete': {
      param: {
        date: '16-01-01',
        format: 'yyyy-MM-dd'
      },
      result: '2016-01-01'
    },
  }


  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var myDate = new MyDate(case_data[name].param.date);
      var result = myDate.format(case_data[name].param.format)
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }

});


describe(' getTimeUTC 测试', function() {
  var case_data = {
    'getTimeUTC ': {
      param: {
        date: 1467627741105
      },
      result: 1467598941105
    }
  }

  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var myDate = new MyDate(case_data[name].param.date);
      var result = myDate.getTimeUTC();
      // console.log('98:',MyDate.getzoneOffset());
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }
})

describe(' changeTimezone 测试', function() {
  var case_data = {
    'changeTimezone  ': {
      param: {
        date: 1467725512621,
        zon1: 8,
        zon2: 0
      },
      result: 1467696712621
    }
  }

  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var myDate = new MyDate(case_data[name].param.date);
      myDate.changeTimezone(case_data[name].param.zon1, case_data[name].param.zon2);
      expect(myDate.getTime()).to.be.deep.equal(case_data[name].result);
    });
  }
})

describe(' derTime 测试', function() {
  var case_data = {
    'getTimeUTC hour ': {
      param: {
        date1: 1467627741105,
        date2: 1467598941105
      },
      result: '8小时后'
    },
    'getTimeUTC just ': {
      param: {
        date1: 1467627741105,
        date2: 1467627741105
      },
      result: '刚刚'
    },
    'getTimeUTC minute ': {
      param: {
        date1: 1467627000000,
        date2: 1467627741105
      },
      result: '12分钟前'
    },
    'getTimeUTC month ': {
      param: {
        date1: 1467627000000,
        date2: 1464948600000
      },
      result: '1个月后'
    },
    'getTimeUTC year ': {
      param: {
        date1: 1467627000000,
        date2: 1436091000000
      },
      result: '1年后'
    }
  }

  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var myDate = new MyDate(case_data[name].param.date1);
      var result = myDate.derTime(case_data[name].param.date1, case_data[name].param.date2);
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }
})