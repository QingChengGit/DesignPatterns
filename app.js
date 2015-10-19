/**
 * Created by Administrator on 2015/10/12.
 */
var pubSub = require('./Observer/pubsub'),
    singleton = require('./Singleton/singleton'),
    validator = require('./Strategy/validator');

pubSub.subscribe('testObserver',function(){
    console.log('publisher 发布消息了!');
});
pubSub.subscribe('testObserver',function(){
    console.log('=====这是发给另一个订阅者的消息!======');
    console.log('publisher 发布消息了!');
});
//发布者发布消息
pubSub.trigger('testObserver');