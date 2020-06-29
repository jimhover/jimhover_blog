const Common=require('./common');
const async=require('async');
const WishModel=require('../models/wish');

const Constant=require('../constant/constant');
let exportObj={
    getList,
    add
};

module.exports=exportObj;

function getList(req,res){
    let tasks ={
        query: cb => {
            WishModel.findAll({
                limit: 10,
                order:[['created_at','DESC']]
            })
            .then(function(result){
                let list=[];

                result.forEach((v,i)=>{
                    let obj={
                        id: v.id,
                        name: v.name,
                        content: v.content
                    };
                    list.push(obj);
                });
                cb(null,list);
            })
            .catch(function (err){
                console.log(err);
                cb(Constant.DEFAULT_ERROR);
            });
        }
    };

    async.auto(tasks,function(err,result){
        if(err){
            console.log(err);
        }else{
            console.log(result['query']);
            res.render('index',{
                list: result['query'],
                title: '美好的世界，在你的眼里和手中。'
            });
        }
    })
}

function add(){

}