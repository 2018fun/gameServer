
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.send('respond with a armor');
});

router.post('/material', function(req, res, next){
    var material_id = req.body.material_id
});

module.exports = router;