/**
*
* by Ming 16/07/06
*
*/
"use strict";

var isArr = require('./index.js');
var expect = require('chai').expect;

describe("sortArray 测试", function(){
	var case_data = {
		'isArray': {
			param:{
				arr: []
			},
			result: true
		},
		'isArray2': {
			param:{
				arr: {}
			},
			result: false
		},
		'getSpecifyArr - min': {
			param: {
				arr:'[9,2,5,7,8,1]',
				length: 3,
				sortType: -1
			},
			result: '[1,2,5]'
		},
		'getSpecifyArr - max': {
			param: {
				arr: '[9,2,5,7,8,1]',
				length: 4,
				sortType: 1
			},
			result: '[9,8,7,5]'
		}
	}
	for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var result = isArr(case_data[name].param.arr);
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }

})
