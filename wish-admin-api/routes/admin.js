var express=require('express');
var router=express.Router();

const AdminController=require('../controller/admin');

router.get('/',AdminController.list);
router.post('/',AdminController.add);
router.get('/:id',AdminController.info);
router.update('/',AdminController.update);
router.delete('/',AdminController.remove);

module.exports=router;