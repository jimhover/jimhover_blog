//定义一个对象
const obj={
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
        code: '199',
        msg: '缺少必要参数'
    }
};

module.exports=obj;
