// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// app.get('/:id', function(req, res){
//   res.send('user ' + req.params.id);
// });

// module.exports = router;

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({"hello":"world"})
});

module.exports = router;