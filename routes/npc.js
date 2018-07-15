
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a armor');
});
/**
 * npc 列表
 * 
 */
router.post('/npc_list', function(req, res, next){

});
/**
 * 单独npc的信息
 */
router.post('/npc_info', function (req, res, next) {

});

router.post('/visit', function (req, res, next) {

});

router.post('/mail', function (req, res, next) {

});

module.exports = router;