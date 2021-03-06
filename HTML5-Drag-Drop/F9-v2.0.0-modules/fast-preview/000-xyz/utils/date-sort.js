const dates = [
    {
        "sj": "2010-02-28",
        "st": 0,
        "wc": 2,
        "xt": 0,
        "gj": 22.68
    },
    {
        "sj": "2017-09-30",
        "st": 1,
        "wc": 4,
        "xt": 2,
        "gj": 51.04
    },
    {
        "sj": "2007-04-30",
        "st": 0,
        "wc": 3,
        "xt": 0,
        "gj": 20.99
    },
    {
        "sj": "2009-10-31",
        "st": 0,
        "wc": 7,
        "xt": 1,
        "gj": 14.43
    },
    {
        "sj": "2016-10-31",
        "st": 0,
        "wc": 6,
        "xt": 0,
        "gj": 59.03
    }
];

const new_array = [];
// 二叉树，先序遍历！
/* 

js 算法实现：

1. 构造一颗二叉树
2. 先序遍历二叉树

*/
let nums = dates.map(
    (obj) => {
        console.log(obj.sj);
        // sort
        let num = parseInt(obj.sj.replace(/-/g, ``));
        // new_array.push(num);
        return num;
    }
);
// [20100228, 20170930, 20070430, 20091031, 20161031]


let strs = dates.map(
    (obj) => {
        console.log(obj.sj);
        return obj.sj;
    }
);
// ["2010-02-28", "2017-09-30", "2007-04-30", "2009-10-31", "2016-10-31"]




/* 

nums = [20100228, 20170930, 20070430, 20091031, 20161031];

// ??? sort nums

nums.sort();
// [20070430, 20091031, 20100228, 20161031, 20170930]

strs = ["2010-02-28", "2017-09-30", "2007-04-30", "2009-10-31", "2016-10-31"];

strs.sort();
// ["2007-04-30", "2009-10-31", "2010-02-28", "2016-10-31", "2017-09-30"]


dates.sort();
// BAD: keep same!


*/


/* 


let sj = "2010-02-28";
parseInt(sj);
// 2010
sj.replace(/-/g, ``);
// "20100228"

// "20100228" => "2010-02-28" ???


20100228 > 20170228;
// false
20100228 < 20170228;
// true

*/




















