var express = require('express');
var router = express.Router();

var controllers = require('../app/controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//TEST
router.get('/test', controllers.test.getTest);

//lOGIN
router.post('/login' , controllers.login.postLogin);



module.exports = router;
