/**
*
* by Ming 16/07/06
*
*/
"use strict";

var isArr = require('./index.js');
var expect = require('chai').expect;

describe("isArray 测试", function(){
	var case_data = {
		// 'getMinSort': {
		// 	param: {
		// 		arr: '[12,1,3,4,10,8,5]',
		// 		length: 3,
		// 		sortType: -1
		// 	},
		// 	result: '[1,3,4]'
		// }
		// 'getMinSort': {
		// 	param: {
		// 		arr: '["a","d","c","g","z","x"]',
		// 		length: 3,
		// 		sortType: -1
		// 	},
		// 	result: '["a","c","d"]'
		// }
		'new arr': {
			param:{
				arr: []
			},
			result: true
		}
	}

	for (var name in case_data) {
    it(name + ' 返回' + JSON.stringify(case_data[name].result), function() {
      var result = isArr(case_data[name].param.arr);
      expect(result).to.be.deep.equal(case_data[name].result);
    });
  }

})