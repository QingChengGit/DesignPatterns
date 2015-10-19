/**
 * Created by Administrator on 2015/10/10.
 */
/**
 * @desc 表单验证常用的策略类
 * @type {{isNonEmpty, minLength, isMobile, isEmail}}
 */
var strategies = (function(){
    var mobile_reg = /^1[3|5|8][0-9]{9}$/,
        email_reg = /^[A-Za-zd]+([-_.][A-Za-zd]+)*@([A-Za-zd]+[-.])+[A-Za-zd]{2,5}$/;
    return {
        isNonEmpty: function(val, errMsg){
            if(val === '' || val === null){
                return errMsg || false;
            }
            return true;
        },
        minLength: function(val, length, errMsg){
            if(val.length < length){
                return errMsg || false;
            }
            return true;
        },
        isMobile: function(val, errMsg){
            if(!mobile_reg.test(val)){
                return errMsg || false;
            }
            return true;
        },
        isEmail: function(val, errMsg){
            if(!email_reg.test(val)){
                return errMsg || false;
            }
            return true;
        }
    };
}());
module.exports = strategies;