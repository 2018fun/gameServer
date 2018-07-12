
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 
 */
router.get('/armorInUse', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 
 */
router.post('/fixArmor', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 更换护甲
 */
router.post('/exArmor', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 
 */
// router.post('/', function(req, res, next) {
//     res.send('respond with a armor');
// });

module.exports = router;