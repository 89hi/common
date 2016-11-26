/**
 * by iwuly
 * 2016-7-5 23:01:26
 */
'use strict';

var isFunction = require('./index.js');
var expect = require('chai').expect;

describe(' isFunction 测试', function() {
  var case_data = {
    'string': {
      param: 'function () {}',
      result: false
    },
    'boolean': {
      param: true,
      result: false
    },
    'function': {
      param: function() {},
      result: true
    },
    'new Function': {
      param: new Function(),
      result: true
    },
    'number': {
      param: 1467627741105,
      result: false
    },
    'object': {
      param: {},
      result: false
    },
    'Date': {
      param: new Date(),
      result: false
    },
  }

  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var result = isFunction(case_data[name].param)
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }

});
