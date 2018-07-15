
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 学习魔法
 */
router.post('/learn', function(req, res, next){
    var magic_id = req.body.magic_id
});
/**
 * 
 */

module.exports = router;