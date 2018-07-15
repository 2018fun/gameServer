
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});
/**
 * 
 */
router.get('/pet_list', function(){

});
/**
 * 
 */
router.get('/pet_info', function() {

});
/**
 * 驯化
 */
// router.post('/')


module.exports = router;