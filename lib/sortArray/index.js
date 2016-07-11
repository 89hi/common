/**
*
* by Ming 16/07/06
*
*/

"use struct";

module.exports = function(data){
	var data = {
		arr: arr,
		length: length,
		sortType: sortType
	};

	function isArr(arr){
		return Object.prototype.toString.call(arr) === "[object Array]"
	};
	function randomSort(arr,length){
		if(isArr(arr)){
			for(var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
				console.log(arr.slice( 0, length));
			return arr.slice( 0, length);
		}
	};
	function getSpecifyArr(arr,length,sortType){
		if(isArr(arr)){
			var newArr = [];
			var len = arr.length;
			for(var j = 0; j < len; j++){
				var firstIndex = arr[0],index;
				for(var i in arr){
					if((arr[i] - firstIndex)*sortType <= 0){
						firstIndex = arr[i]
						index = i;
					}
				}
				arr.splice(index,1);
				newArr.push(firstIndex);
				firstIndex = arr[0];
			}
			newArr.slice(0, length);
			console.log(newArr)
		}
	};
}
