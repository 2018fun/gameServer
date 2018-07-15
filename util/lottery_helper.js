var lottery = {
    random(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    },
    is_win: (choose, pool) => {
        return choose < Math.floor(Math.random() * pool)
    },
    win: (list) => {
        return list[Math.floor(Math.random() * list.length)]
    },
    random2: (list) => {
        let first = Math.floor(Math.random() * list.length)
        let second = Math.floor(Math.random() * (list.length - 1))
        return [list[first], list[second >= first ? second + 1 : second]]
    },
    randomn: async (list, n) => {
        if (n >= list.length) {
            return list
        }
        var result = [];
        for (var i = 0; i < n && n > 0; i++) {
        }
        return result;
    }
}
// var list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var i = 0
// var a1 = 0, a2 = 0, a3 = 0, a4 = 0, a5 = 0, a6 = 0, a7 = 0, a8 = 0, a9 = 0, a0 = 0
// while (i < 100) {
//     // console.log(lottery.win(list))
//     switch (lottery.win(list)) {
//         case 0:
//             a0++;
//             break;
//         case 1:
//             a1++;
//             break;
//         case 2:
//             a2++;
//             break;
//         case 3:
//             a3++;
//             break;
//         case 4:
//             a4++;
//             break;
//         case 5:
//             a5++;
//             break;
//         case 6:
//             a6++;
//             break;
//         case 7:
//             a7++;
//             break;
//         case 8:
//             a8++;
//             break;
//         case 9:
//             a9++;
//             break;
//     }
//     i++
// }

// console.log(a0)
// console.log(a1)
// console.log(a2)
// console.log(a3)
// console.log(a4)
// console.log(a5)
// console.log(a6)
// console.log(a7)
// console.log(a8)
// console.log(a9)
exports.module = lottery;