/**
 * by mochen
 * 2016-7-11 11:58:12
 */
'use strict';

var getRandomStr = require('./index.js');
var expect = require('chai').expect;

describe('getRandomStr测试', function() {
  var case_data = {
    0: [-1, 0],
    1: [0, 8],
    2: ['', 8],
    3: [3, 3],
    4: [10, 10],
    5: [50, 24]
  }
  for (var name in case_data) {
    it('参数为:' + case_data[name][0] + ' 返回长度为' + case_data[name][1], function() {
      expect(getRandomStr(case_data[name][0])).to.have.length(case_data[name][1]);
    });
  }

});