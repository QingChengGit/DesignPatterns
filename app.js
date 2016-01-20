/**
 * Created by Administrator on 2015/10/12.
 */
var pubSub = require('./Observer/pubsub'),
    singleton = require('./Singleton/singleton'),
    validator = require('./Strategy/validator'),
    Decorator = require('./Decorator/decorator');

pubSub.subscribe('testObserver',function(){
    console.log('publisher 发布消息了!');
});
pubSub.subscribe('testObserver',function(){
    console.log('=====这是发给另一个订阅者的消息!======');
    console.log('publisher 发布消息了!');
});
//发布者发布消息
pubSub.trigger('testObserver');

var duck = function () {
    console.log('我是一只只能在水里游的鸭子!');
};
//装饰鸭子
duck = Decorator.afterDecorate(duck, function () {
    console.log('鸭子现在可以飞了!');
});
duck();