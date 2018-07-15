
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});

router.post('/forest', function(req, res, next){

});

router.post('/desert', function(req, res, next) {

});

router.post('/magma', function(req, res, next){

});

router.post('/swamp', function(req, res, next) {

});

router.post('/ice', function(req, res, next) {

});

router.post('/mountain', function(req, res, next){

});

router.post('/stone', function(req, res, next) {

});

router.post('/grass', function(req, res, next) {

});

router.post('/river', function(req, res, next) {

});

router.post('/maze', function(req, res, next){

});

router.post('/dungeon', function(req, res, next){

});

router.post('/cave', function(req, res, next) {

});
/**
 * 完成副本 获取奖励
 */
router.post('/finish', function(req, res, next){

});

module.exports = router;