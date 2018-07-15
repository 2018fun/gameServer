
var express = require('express');
var router = express.Router();

var lottery = require('../util/lottery_helper')
var skill_enum = require('../enum/skill')

router.get('/newSkill', function(req, res, next) {
    console.log(skill_enum.WISDOM);
    res.send('respond with a armor');
});

/**
 * req:uuid, skillid
 * res:level
 */
router.post('/playerSkillInfo', function(req, res, next){

});

/**
 * skillid
 */
router.post('/skillInfo', function(req, res, next){
    console.log(req.body.skill_id);
    // res.send()
});

module.exports = router