const async=require('async');
const Constant=require('../constant/constant');

const exportObj={
    clone,
    checkParams,
    autoFn
}   

module.exports=exportObj;

/**
 * clone the obj 
 * @param obj
 * @returns {any}
*/
function clone(obj){
    return JSON.parse(JSON.stringify(obj));
}

/**
 * 全局参数校验
 * @param params
 * @param checkArr
 * @param cb
 * 
*/

function checkParams(params, checkArr,cb){
    let flag=true;
    checkArr.forEach( v => {
        if(!params[v]){
            flag=false;
        }
    });
    if(flag){
        cb(null);
    }else{
        cb(Constant.l)
    }
}

/**
 * 返回统一方法
 * @param tasks
 * @param res
 * @param resObj
*/

function autoFn(tasks,res,resObj){ 
    async.auto(tasks,function(err){
        if(!!e){
            console.log(JSON.stringify(err));
            res.json({
                code: err.code || Constant.DEFAULT_ERROR.code,
                msg: err.msg || JSON.stringify(err)
            });
        }else{
            res.json(resObj); 
        }
    });
}

