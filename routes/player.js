/**
 * 玩家信息
 * 
 * 
 */

// {
//     hero: {
//         carry: {
//             left_hand: "weapon"
//             right_hand: "shield"
//             head: ""
//             body: ""
//             book: ""
//             rings: ""
//             knecklace: ""
//         },
//         paper: 5
//     },
//     skills: [],
//         boxes: [
//             {
//                 weapons
//                 shield
//                 head
//                 body
//                 book
//                 rings
//                 knecklace
//             }
//         ]
// }

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ "hello": "world" })
});

/**
 * 其他登录
 */
router.post('/login', function (req, res, next) {
    console.log(req)
    res.json({ "hello": "world" })
});

/**
 * 微信登录
 */
router.post('/wxlogin', function (req, res, next) {
    var wxid = req.body.wxid;
    var uuid = getUUId(wxid);
    var hero = getHero(uuid);
    res.json({
        code: 0,
        data: {
            hero: hero
        }
    })

});

/**
 * 获取英雄 游戏时候使用
 */
router.post('/hero', function (req, res, next) {
    var uuid = req.body.uuid;
    var hero = getHero(uuid)
    res.json({
        code: 0,
        data: {
            hero: hero
        }
    })

})

var getHero = function (uuid) {
    var skills = []
    var hero = {}

    return {}
}

var getExperience = function (uuid) {
    var experience = 0;
    return experience
}

module.exports = router;