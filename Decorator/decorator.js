/**
 * Created by Administrator on 2016/1/20.
 */
/*
    装饰者模式的意图是给在不修改类的前提下，给对象动态添(注意动态添加)加职责.
    经过装饰者模式装饰过的对象并不会影响源对象，也就是说在其他地方引用改对象
    获取的还是纯洁的源对象，这保持了对象的复用性并避免产生副作用,并且完全符合
    开放-封闭原则(即对扩展开放，对修改封闭原则)。
    装饰者与被装饰者拥有相同的接口,对于用户来说装饰者与被装饰者是一样的，是透
    明的。
    装饰者模式的缺点(基于函数式的装饰者模式)：当装饰者过多，装饰链过长时会对
    性能产生一些影响;此外被装饰者函数如果保存了一些属性在被装饰者装饰过后那
    些属性将会丢失。因为被装饰者装饰过后的函数其实是一个新函数，这些问题在实
    际应用中需要留心下!
 */

/********************** 模拟传统面向对象的装饰者模式 **********************/
var Duck = function () {};
Duck.prototype.fireAbility = function () {
    console.log('鸭子能在水里游!');
};

/*
    @param decorate 被装饰者
 */
var FlyDecorator = function (decorate) {
    this.decorate = decorate;
};
FlyDecorator.prototype.fireAbility = function () {
    this.decorate.fireAbility();
    console.log('鸭子可以飞行了!');
};

var Transfer = function (decorate) {
    this.decorate = decorate;
};
Transfer.prototype.fireAbility = function () {
    this.decorate.fireAbility();
    console.log('鸭子可以变身了!');
};

//使用例子
var myduck =  new Duck();
myduck = new FlyDecorator(myduck);
myduck = new Transfer(myduck);
myduck.fireAbility();

/*
    打印结果:
     鸭子能在水里游!
     鸭子可以飞行了!
     鸭子可以变身了!
 */
/********************** 模拟传统面向对象的装饰者模式 End **********************/

/********************** 基于javascript的装饰者模式 ***************************/
var before = function (fn, beforeFn) {
    return function (){
        beforeFn.apply(this, arguments);
        return fn.apply(this, arguments);
    };
};
var after = function (fn, afterFn) {
    return function () {
        var rs = fn.apply(this, arguments);
        afterFn.apply(this, arguments);
        return rs;
    };
};
module.exports = {
    beforeDecorate: before,
    afterDecorate: after
};