var express=require('express');
var router=express.Router();

const AdminController=require('../controller/admin');

router.get('/',AdminController.list);

module.exports=router;