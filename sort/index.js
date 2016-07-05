/**
 * by zada
 * 2016-7-4 19:56:26
 */

 'use strict';

 module.export = function(){
  var service = {
    quickSort:function(array){
      /*快速排序:锁定一个值 按照大于 小与的分别排序*/
      if(array.length <= 1){
        retuen array;
      }

      var centerIndex = Math.floor(array.length/2);

      var left = [];
      var right = [];
      
      for(var value in array){
        if(value > array[centerIndex]){
          left.push(value)
        }else{
          right.push(value)
        }
      }

      this.quickSort(left).concat([array[centerIndex]],this.quickSort(right));
    },
    simpleSort:function(array){
      /*简单排序 给定带排序序列 A[1....n] 选择第i小元素，并和A[i]交换*/
      var length = array.length;
      var i , j , index ;

      for(i = 0 ; i < length -1 ;i++ ){
        index = i;
        for(j = i+1 ;j < length ; j++){
          if(array[j] < index){
            index = j
          }
        }
        if(index != i){
          var tmp = array[i];
          array[i] = array[index];
          array[index] = tmp;
        }
      }
    },
    simpleSortAdvance:function(array){
      /*简单排序升级版 用递归来实现 上一层的for*/
      var length = array.length

      if(length <= 1){
        retuen array;
      }

      var i ,index = 0 ;
      for(i = 1; i<length;i++){
        if(array[i] < array[index]){
          index = i
        }
      }

      if(index != 0){
        var tmp = array[0];
        array[0] = array[index];
        array[index] = tmp;
      }

      return [array[0]].concat(this.simpleSortAdvance(array.slice(1,array.length-1)));
    },
    bubbleSort:function(array){
      /*冒泡排序 每次从第一个纪录开始 一只往后比，每一趟冒泡排序后，无序序列中值最大的纪录冒到序列末尾，因此为冒泡排序*/
      var length = array.length;
      var i , j;
      for( i = 0; i< length-1 ;i++){
        for( j = i+1 ;j < length ; j++){
          if(array[j] < array[i]){
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
          }
        }
      }
    }
  }
 }