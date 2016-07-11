## DateFormatter

> 日期对比，第二个日期与第一个日期相比

```javascript
var date2 = '1467627741105';
var dateJust = '1467627741105'
var dateMin = '1467627000000';
var dateHour = '1467660141105'; 
var dateDay = '1467717741105';
var dateMonth = '1470306141105';
var dateYear = '1467627741105';
dateCompare(dateJust);                   //默认与现在比较 
dateCompare(dateJust,date2);"刚刚"        // 一分钟内
dateCompare(dateMin,date2);"12分钟前"     // 分钟时差
dateCompare(dateHour,date2);"9小时后"     // 小时时差
dateCompare(dateDay,date2);"1天后"       //  天时差
dateCompare(dateMonth,date2);"1个月后"    // 月时差
dateCompare(dateYear,date2);"1年后"       // 年时差
```