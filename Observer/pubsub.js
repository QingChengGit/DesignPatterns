/**
 * Created by Administrator on 2015/10/12.
 */
var PubSubscriber = {};
PubSubscriber.subscribers = [];
PubSubscriber.subscribe = function(eventName, handler){
    //订阅名称为eventName的消息
    if(eventName){
        if(!this.subscribers[eventName]){
            this.subscribers[eventName] = [];
        }
        this.subscribers[eventName].push(handler);
    }
};
PubSubscriber.unSubscribe = function(eventName, fn){
    //取消订阅某类事件
    if(eventName){
        var fns = this.subscribe[eventName];
        if(fns && fns.length>0){
            if(!fn){
                fns = [];
            }else{
                for(var s = 0, len = fns.length;s < len;s += 1){
                    if(fns[s] === fn){
                        fns.splice(s,1);
                    }
                }
            }
        }
    }
};
PubSubscriber.trigger = function(){
    //发布某类消息
    var evtName = Array.prototype.shift.call(arguments),
        fns = this.subscribers[evtName];
    for(var i = 0, len = fns.length;i < len ;i += 1){
        fns[i].apply(this, arguments);
    }
};
module.exports = PubSubscriber;