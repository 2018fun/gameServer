
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});

router.post('/weaponList', function(req, res, next) {

});

/**
 * 单个武器信息
 */
router.post('/weaponInfo', function(req, res, next){

});


module.exports = router;