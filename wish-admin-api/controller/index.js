const Common=require('./common');
const AdminModel = require('../models/admin');
const Constant= require('../constant/constant');
const dateFormat=require('dateformat');
const Token=require('./token');
const TOKEN_EXPIRE_SECOND = 3600;
let exportObj={
    login
}
module.exports=exportObj;

function login(req,res){
    const resObj=Common.clone(Constant.DEFAULT_SUCCESS);
    let tasks={
        checkParams: (cb)=>{
            Common.checkParams(req.body,['username','password'],cb);
        },
        query: ['checkParams', (result,cb) =>{
            AdminModel.findOne({
                where:{
                    username: req.body.username,
                    password: req.body.password
                }
            })
            .then(function (result){
                if(result){
                    resObj.data={
                        id: result.id,
                        username: result.username,
                        name: result.name,
                        role: result.role,
                        lastLoginAt: dateFormat(result.lastLoginAt, 'yyyy-mm-dd HH:MM:ss'),
                        createdAt: dateFormat(result.createdAt, 'yyyy-mm-dd HH:MM:ss')
                    };
                    const adminInfo={
                        id: result.id
                    };
                    console.log("adminInfo........."+ JSON.stringify(adminInfo));
                    let token=Token.encrypt(""+adminInfo.id,TOKEN_EXPIRE_SECOND);
                    resObj.data.token=token;
                    cb(null,result.id);
                }else{
                    cb(Constant.LOGIN_ERROR)
                }
            })
            .catch(function(err){
                console.log(err);
                cb(Constant.DEFAULT_ERROR);
            });
        }],
    writeLastLoginAt: ['query',(results,cb)=>{
        let adminId=results['query'];
        AdminModel.update({
            lastLoginAt: new Date()
        },{
            where: {
                id: adminId
            }
        })
        .then(function(result){
            if(result){
                cb(null);
            }else{
                cb(Constant.DEFAULT_ERROR);
            }
        })
        .catch(function(err){
            console.log(err);
            cb(Constant.DEFAULT_ERROR)
        });
    }]
    };
    Common.autoFn(tasks,res,resObj);
}