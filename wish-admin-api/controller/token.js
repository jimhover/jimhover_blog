const jwt=require('jsonwebtoken');
const tokenKey='root@123';

const token={
    encrypt: function(data,time){
        return jwt.sign({data:data},tokenKey,{expiresIn: 60});
    },

    decrypt: function(token){
        try{
            let data=jwt.verify(token,tokenKey);
            return {
                token: true,
                data: data
            };
        }catch(e){
            return{
                token: false,
                data: e
            };
        }
    }
};

module.exports=token;