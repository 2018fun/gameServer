var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 获取单独怪物信息
 */
router.post('/monster_info', function(req, res, next){
    var material_id = req.body.material_id
});
/**
 * 获取怪物列表
 */
router.post('/monster_list', function(req, res, next){

});

module.exports = router;