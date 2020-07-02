//定义一个对象
const exportObj={
    //默认请求成功
    DEFAULT_SUCCESS: {
        code: 10000,
        msg: ''
    },
    //默认请求失败
    DEFAULT_ERROR:{
        code: 188,
        msg: '出现错误'
    },
    //缺少必要参数
    LACK:{
        code: 199,
        msg: '缺少必要参数'
    },
    TOKEN_ERROR:{
        code: 401,
        msg: "token 错误"
    },
    LOGIN_ERROR:{
        code: 102,
        msg: '用户名密码错误。'
    },
    ADMIN_NOT_EXIST:{
        code: 102,
        msg: '管理员信息不存在。'
    }
};

module.exports=exportObj;