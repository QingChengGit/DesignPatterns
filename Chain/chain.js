/**
 * Created by Administrator on 2016/2/18.
 */
/*
    职责链模式适应于请求的发起者对于多个请求接收者，并且发起者并不知道链中的哪个接收者可以处理请求的情形。
    它解耦了请求的发送者和请求的接收者之间的复杂关系，也能避免在程序中写大段大段的复杂的if else语句
 */
function order500(orderType, isPay, stock){
    if(orderType == 1 && isPay){
        console.log('500元定金预购，获得100元优惠券!');
    }else{
        //将请求传递给链中的下一个用户
        return 'nextProcessor';
    }
}

function order200(orderType, isPay, stock){
    if(orderType == 2 && isPay){
        console.log('200元定金预购，获得50元优惠券!');
    }else{
        return 'nextProcessor';
    }
}

function orderNormal(orderType, isPay, stock){
    if(orderType == 3){
        if(stock > 0){
            console.log('没有预购，普通购买，无优惠券!');
        }else{
            console.log('库存不足，无法购买!');
        }
    }else{
        return 'nextProcessor';
    }
}

//职责链节点对象
function ChainNode(nodeFn){
    this.fn = nodeFn;
    this.nextProcessor = null;
}
ChainNode.prototype.setNextProcessor = function (processor) {
    this.nextProcessor = processor;
};
ChainNode.prototype.dealRequest = function () {
    var ret = this.fn.apply(this, arguments);
    if(ret === 'nextProcessor'){
        //将请求传递给链中的下一个节点
        return this.nextProcessor && this.nextProcessor.dealRequest.apply(this.nextProcessor, arguments);
    }
    return ret;
};
ChainNode.prototype.next = function () {
    //用于当职责链节点的处理请求函数为异步函数的情形，将请求传递给链中的下一个节点
    return this.nextProcessor && this.nextProcessor.dealRequest.apply(this.nextProcessor, arguments);
};
/******************** 测试职责链模式 *******************/
//创建职责链节点
var orderChain500 = new ChainNode(order500);
var orderChain200 = new ChainNode(order200);
var orderChainNormal = new ChainNode(orderNormal);

orderChain500.setNextProcessor(orderChain200);
orderChain200.setNextProcessor(orderChainNormal);

orderChain500.dealRequest(2, false, 3);
