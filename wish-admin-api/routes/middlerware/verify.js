const Token=require('../../controller/token');
const Constant=require('../../constant/constant');

const exportObj={
    verifyToken
};

module.exports=exportObj;

function verifyToken(req,res,next){
    if(req.path=== '/login'){
        return next();
    }
    let token=req.headers.token;
    let tokenVerifyObj=Token.decrypt(token);
    if(tokenVerifyObj.token){
        next();
    }else{
        res.json(Constant.TOKEN_ERROR);
    }
}