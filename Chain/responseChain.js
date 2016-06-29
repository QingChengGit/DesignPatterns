/**
 * Created by liuxinxin on 2016/6/29.
 */
/*
    @desc 定义一个职责链对象
    @param {function} fn    职责链节点的处理函数
    @return {ResChain}  返回一个职责链节点对象
 */
function ResChain(fn) {
    this.fn = fn;
    this.nextProcessor = null;
}

/*
    @desc   设置相对当前职责链节点的下一个职责链节点
    @param {ResChain} processor
    @return undefined
 */
ResChain.prototype.setNextProcessor = function(processor) {
    if(processor && processor instanceof ResChain){
        this.nextProcessor = processor;
    }
};

/*
    @desc 从当前节点运行职责链
 */
ResChain.prototype.run = function() {
    var self = this,
        arg = arguments,
        ret = self.fn.apply(self, arg);
    if(ret === 'nextProcess'){
        self.nextProcessor && self.nextProcessor.run.apply(self.nextProcessor, arg);
    }
};

//测试
var chain1 = new ResChain(function(food) {
    if(food === '骨头'){
        console.log('我是chain1,' + food + '是我爱吃的东西!');
    }else{
        return 'nextProcess';
    }
});
var chain2 = new ResChain(function(food) {
    if(food === '娃娃鱼'){
        console.log('我是chain2,' + food + '是我爱吃的东西!');
    }else{
        return 'nextProcess';
    }
});
var chain3 = new ResChain(function(food) {
    if(food === '水蜜桃'){
        console.log('我是chain3,' + food + '是我爱吃的东西!');
    }else{
        return 'nextProcess';
    }
});
var chain4 = new ResChain(function(food) {
    if(food === '人参果'){
        console.log('我是chain4,' + food + '是我爱吃的东西!');
    }else{
        return 'nextProcess';
    }
});
var chain5 = new ResChain(function(food) {
    //兜底容灾处理节点
    console.log('我是chain5,你们都不喜欢的东西就给我吃了!');
});

chain1.setNextProcessor(chain2);
chain2.setNextProcessor(chain3);
chain3.setNextProcessor(chain4);
chain4.setNextProcessor(chain5);
chain1.run('娃娃鱼');