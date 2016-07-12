/**
*
* by Ming 16/07/06
*
*/

"use struct";

module.exports = function(){
  function isArr(arr){
    return Object.prototype.toString.call(arr) === "[object Array]";
  };
  return isArr();

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
      newArr = newArr.slice(0, length);
      newArr.join(',');
    };
  };
  return getSpecifyArr();
}
