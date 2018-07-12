
var express = require('express');
var router = express.Router();

var lottery = require('../util/lottery_helper')
var skill_enum = require('../enum/skill')

router.get('/newSkill', function(req, res, next) {
    console.log(skill_enum.WISDOM);
    res.send('respond with a armor');
});

module.exports = router