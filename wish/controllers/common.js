const async = require('async');
const Constant=require('../constant/constant')
const exportObj={
    checkParams
}

module.exports=exportObj;

function checkParams(params,checkArr,cb){
    let flag=true;
    checkArr.forEach(v => {
        if(!params[v]){
            flag=false;
        }
    });

    if(flag){
        cb(null);
    }else{
        cb(Constant.LACK);
    }
}