/**
 * Created by Administrator on 2015/10/21.
 */
var toString = Object.prototype.toString,
    isFunction = function(obj){return toString.call(obj) === "[object Function]";},
    isObject = function(obj){return toString.call(obj) === "[object Object]";};
var CommContext = function(){
    this.comList = [];
};
CommContext.prototype.addCommand = function(command){
    if(command && (isFunction(command) || isObject(command))){
        if("execute" in command){
            this.comList.push(command);
        }
    }
};
CommContext.prototype.execute = function(){
    for(var s = 0, len = this.comList;s < len;s+=1){
        this.comList[s].execute();
    }
};
CommContext.prototype.undo = function(command){
    if(command && (isFunction(command) || isObject(command))){
        //撤销某个命令
        for(var s = 0, len = this.comList;s < len;s+=1){
            if(this.comList[s] === command){
                this.comList.splice(s, 1);
                return;
            }
        }
    }else if(!command){
        //撤销命令，每执行一次撤销最新添加的命令,类似大家重用的ctrl+z快捷键的功能
        this.comList.length && this.comList.pop();
    }
};
module.exports = CommContext;