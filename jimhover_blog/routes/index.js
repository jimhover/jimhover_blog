var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req.url);
  res.render('index', { 
    title:'hello jimhover',
    name:'jimhover',
    age:30,
    list:[{
      code: 001,
      number:"18681556859"
    },{
      code: 002,
      number: "19987687798"
    }]
  });
});

router.get('/hello/:name/:age',function(req,res,next){
console.log('=========================');
res.send(req.params)
});

module.exports = router;
