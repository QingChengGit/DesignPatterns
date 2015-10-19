/**
 * Created by Administrator on 2015/10/10.
 */
var strategy = require('./strategy');
function Validator(){
    this.rules  = [];
}
Validator.prototype.add = function(dom, rule, errMsg){
    if(typeof rule === 'function'){
        //支持自定义校验函数
        this.rules.push(function(){
            rule();
        });
        return;
    }
    //用户传递的rule参数的格式为-> strategy:parameter这种格式
    var argArr = rule.split(':');
    //弹出用户挑选的校验策略
    var strategyName = argArr.shift();
    //将dom的value值作为参数传递到校验策略寒素中去
    argArr.unshift(dom.value);
    argArr.push(errMsg);
    this.rules.push(function(){
        strategy[strategyName].apply(dom, argArr);
    });
};
Validator.prototype.valid = function(){
    for(var i = 0, len = this.rules.length;i < len;i += 1){
        //开始校验，并取得校验返回的信息
        var msg = this.rules[i]();
        if(msg === false || msg !== true){
            //说明校验没有通过
            return msg;
        }else{
            return true;
        }
    }
};
module.exports = Validator;