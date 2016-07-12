/**
*
* by Ming 16/07/06
*
*/
"use strict";

var sortArray = require('./index.js');
var expect = require('chai').expect;

describe("sortArray 测试",
function() {
  var case_data = {
    'isArray': {
      param: {
        arr: []
      },
      result: true
    },
    'isArray2': {
      param: {
        arr: {}
      },
      result: false
    },
  }
  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result),
    function() {
      // var sortArray = new sortArray(case_data[name].param.arr);
      var result = sortArray(case_data[name].param.arr);
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }

})

describe("getSpecifyArr 测试",
function() {
  var case_data = {
    'getSpecifyArrMin': {
      param: {
        arr: [9, 2, 5, 7, 8, 1],
        num: 1,
        sortType: 1
      },
      result: "9"
    },
    'getSpecifyArrMax': {
      param: {
        arr: [9, 2, 5, 7, 8, 1],
        num: 1,
        sortType: -1
      },
      result: "9"
    }
  }
  for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result),
    function() {
      // var sortArray = new sortArray(case_data[name].param);
      var result = sortArray(case_data[name].param);
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }

})
