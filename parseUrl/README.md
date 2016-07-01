## ParseUrl

> 将Url参数解析为JSON对象

```javascript
var url = 'http://xx.com?a=1&b=2';
var paramsJSON = parseUrl(url);
console.log( paramsJSON ); // { a:1, b:2 }
```