
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.send('respond with a armor');
});

// router.post('/view', function(){

// })

router.post('/traveled', function (req, res, next) {
    var player = req.body.player;
    // 通过玩家找到其去过的城市列表


});

router.post('/info', function (req, res, next) {
    var city = req.body.city;
});

/**
 * 邀请npc
 */
router.post('/bar', function (req, res, next) {

});

/**
 * 随机返回 技能书  合成卷轴  寻宝地图
 */
router.post('/library', function (req, res, next) {

});

/**
 * 出行去其他城市  
 */
router.post('/bay', function (req, res, next) {

});

/**
 * 存取钱
 * 
 */
router.post('/bank', function (req, res, next) {

});

/**
 * 保险公司
 * 花钱买保险
 */
router.post('/insurer', function (req, res, next) {


});

module.exports = router;