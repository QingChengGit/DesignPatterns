/**
 * Created by Administrator on 2016/1/14.
 */
/*
 avascript中声明函数的方法有两种:函数声明式和函数表达式.
 区别如下:
 1).以函数声明的方法定义的函数,函数名是必须的,而函数表达式的函数名是可选的.
 2).以函数声明的方法定义的函数,函数可以在函数声明之前调用,而函数表达式的函数只能在声明之后调用.
 3).以函数声明的方法定义的函数并不是真正的声明,它们仅仅可以出现在全局中,或者嵌套在其他的函数中,
 但是它们不能出现在循环,条件或者try/catch/finally中,而函数表达式可以在任何地方声明.

 以函数表达式的方式来定义函数，函数的名称是可选的。如果定义了函数名称，这时函数名称会变成函数内
 部的一个局部变量（非常适合用于递归）

 命令模式的意图是为了将命令的请求者与命令的接受者(执行者)解耦
 */
var sendCommand = function (command) {
    command.execute();
};
var cancelCommand = function (command) {
    command.undo();
};
var createCommand = function (receiver) {
    if(!("execute" in receiver) || !("undo" in receiver)){
        throw new Error('the argument expect have implement "execute" and "undo" methods but it not!');
    }
    return {
        execute: receiver.execute,
        undo: receiver.undo
    }
};
module.exports = {
    sendCommand: sendCommand,
    cancelCommand: cancelCommand,
    createCommand: createCommand
};