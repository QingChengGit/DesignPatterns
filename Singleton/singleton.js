/**
 * Created by Administrator on 2015/9/28.
 */
/**
 * Created by Administrator on 2015/9/28.
 */
/*
 * JS 单例模式
 * @desc 获取单例对象
 * @param {function or object} createObjFn 创建对象的function 或者 直接传递对象
 * @return 返回单例对象
 * */
var getSingleton = function(createObjFn){
    var toString = Object.prototype.toString,
        isFunction = function(fn){ return toString.call(fn) === "[object Function]";},
        isObject  = function(fn){ return toString.call(fn) === "[object Object]";},
        instance;
    /*
     此函数只管理单例，至于对象实例的创建则通过参数传递进来，使得对象的创建和管理
     单例的职责可以独立变化而互不影响，符合单一职责原则，也利于程序维护(以后需要
     多考虑程序的可维护性，保持低耦合)。
     */
    if(!isFunction(createObjFn) && !isObject(createObjFn)){
        return null;
    }
    return function(){
        //返回单例
        return instance || (instance = createObjFn.apply(this,arguments));
    };
};
module.exports = getSingleton;