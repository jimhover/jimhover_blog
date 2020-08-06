var express = require('express');
var router = express.Router();


const IndexController=require('../controller/index');
router.post('/login',IndexController.login);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello index' });
});

module.exports = router;
