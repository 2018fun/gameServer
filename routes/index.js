var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser');
var multer = require('multer'); 

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/wxlogin', function(req, res, next) {
  console.log(req.body);
  res.json(req.body);
});

router.post('/applogin', function(req, res, next){
  res.render('index', { title: 'applogin' });
});

router.post('/h5login', function(req, res, next) {

});

module.exports = router;
