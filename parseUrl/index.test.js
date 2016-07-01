/**
 * by mochen
 * 2016-7-1 16:04:43
 */
'use strict';

var parseUrl = require('./index.js');
var expect = require('chai').expect;

describe('parseUrl测试', function() {
  var case_data = {
    "http://xx.com": {},
    "http://xx.com?": {},
    "http://xx.com?a": {
      a: ""
    },
    "http://xx.com?a=1": {
      a: "1"
    },
    "http://xx.com?a=1&a=2": {
      a: "2"
    },
    "http://xx.com?a=%20": {
      a: " "
    },
    "http://xx.com? =%20": {
      " ": " "
    },
    "http://xx.com?a=1&b=2#cdef": {
      a: "1",
      b: "2"
    },
    "http://xx.com/#/module?a=1#cdef": {
      a: "1"
    }
  }
  for (var name in case_data) {
    it(name + ' 返回 ' + JSON.stringify(case_data[name]), function() {
      expect(parseUrl(name)).to.be.deep.equal(case_data[name]);
    });
  }

});