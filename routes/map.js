var express = require('express');
var router = express.Router();


var bodyParser = require('body-parser');
var multer = require('multer'); 

var app = express();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// app.use(multer()); // for parsing multipart/form-data

/* 根据请求地图类型生成地图 */
router.post('/generate', function(req, res, next) {
  console.log(req);
  
});

/**
 * 完成duty获取奖励
 */
router.post('/reward', function(req, res, next) {

});

/**
 * 获取物品
 */
router.post('/boxOpen', function(req, res, next) {

})

/**
 * 找到npc
 */
router.post('/npcFind', function(req, res, next) {

})

/**
 * collection
 * 
 */
router.post('/monsterDestroy', function(req, res, next) {

})

router.post('/itemDestroy', function(req, res, next) {

})

module.exports = router;