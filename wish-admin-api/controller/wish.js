const Common=require('./common');
const Constant=require('../constant/constant');
const WishModel=require('../models/wish');
const dateFormat=require('dateformat');

let exportObj={
    list,
    info,
    add,
    update,
    remove
};

module.exports=exportObj;

function list(req,res){
    const resObj=Common.clone(Constant.DEFAULT_SUCCESS);
    let tasks={
        checkParams:(cb)=>{
            console.log("query:"+req.query);
            Common.checkParams(req.query,['page','row'],cb);
        },
        querys:['checkParams',(results,cb)=>{
            let offset = req.query.rows*(req.query.page-1) || 0;
            let limit = parseInt(req.query.rows) || 20;
            let whereCondition = {};
            if(req.query.name){
                whereCondition.name=req.query.name;
            }
            WishModel.findAndCountAll({
                where: whereCondition,
                offset: offset,
                limit: limit,
                order: [['created_at','DESC']],
            })
            .then(function (result){
                let list=[];
                result.rows.forEach((v,i)=>{
                    let obj={
                        id: v.id,
                        name: v.name,
                        content: v.content,
                        createdAt: dateFormat(v.created_at ,'yyyy-mm-dd HH:MM:ss')
                    };
                    list.push(obj);
                });
                resObj.data={
                    list,
                    count: result.count
                };
                cb(null);
            })
            .catch(function (err){
                console.log(err);
                cb(Constant.DEFAULT_ERROR)
            });    
        }]
    };
    Common.autoFn(tasks,res,resObj);
}

function info(){}

function add(){}

function update(){}

function remove(){}