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

//通过装饰者模式动态给被装饰者函数参数添加属性
var ajax = function (type, url, param) {
    console.log('ajax请求的参数为:' + JSON.stringify(param));
};
ajax = Decorator.beforeDecorate(ajax, function(type, url, param) {
    //给ajax的param添加属性
    param.token = '生成的token';
});
ajax('post', 'url', {name:'tom cat'});
/*
    打印结果:ajax请求的参数为:{"name":"tom cat","token":"生成的token"}。可知ajax请求自动
    带上了token参数，而ajax函数依然是个纯洁的ajax函数，如果在其他地方ajax函数不需要token
    验证的话ajax函数照样可以复用，而不需要对ajax函数进行修改，符合开放-封闭原则
 */