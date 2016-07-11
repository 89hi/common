## Date操作

###dateFormatter
> 将Date数据转换成想要的格式     (第一个参数需要可转为Date类型的对象／秒数／字符串)

```javascript
var str = dateFormatter(1467627741105,'yyyy-MM-dd')
console.log(str); 
```

###dateCompare
> 将两个date进行比较 得出相差值  (两个参数需要可转为Date类型的对象／秒数／字符串)

```javascript
var str = dateCompare(1467627741105,1467627741999)
console.log(str); 
```