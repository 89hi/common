## DateFormatter

> 日期格式化，将日期转化为指定格式

```javascript

//yyyy-MM-dd hh:mm:ss

var timestamp = '1468205924073';
dateFormatter(timestamp); //"2016-07-11 10:58:44" //默认
dataFormatter(timestamp,'yyyy-MM-dd');"2016-07-11" //年月日
dataFormatter(timestamp,'MM-dd hh:mm:ss');"07-11 10:58:44" //不要年份
dataFormatter(timestamp,'MM-dd hh:mm:ss.S');"07-11 10:58:44.73" //毫秒


```