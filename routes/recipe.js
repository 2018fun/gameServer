
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});

/**
 * 合成
 */
router.post('/')

module.exports = router;