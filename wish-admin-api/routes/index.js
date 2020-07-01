var express = require('express');
var router = express.Router();


const IndexController=require('../controller/index');
router.post('/login',IndexController.login);

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/

module.exports = router;
