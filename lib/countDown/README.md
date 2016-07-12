## CountDown

> 可用于秒杀抢购等业务场景的自动校准倒计时

```javascript
countDown({
  left : 10*1000, //距离结束的毫秒数,
  interval : 333, //倒计时计算频率，默认为333ms。如需毫秒。可自行调整。
  onrun : function(data){
    //倒计时进行中的回调
    //this指向实例本身,可调用stop()方法强制结束
    //data结构如下
    /*{
        d : 0,
        h : 0,
        m : 0,
        s : 10,
        ms : 0
    */}
  },
  onend:function(){
    //倒计时结束时调用
  },
})
```