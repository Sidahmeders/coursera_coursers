// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', () => {
    rl.on('line', readLine);
});

function readLine (line) {
    const arr = line.toString().split(' ').map(n => parseInt(n));
    // var arr = [];
    // for (var i=0, t=153; i<t; i++) {
    //     arr.push(Math.round(Math.random() * t));
        // let max1 = max(arr);
        // let max2 = maxslow(arr);
        // if (max1 === max2) console.log("ok", max1, max2);
        // else if (max1 !== max2) {
        //     console.log("wrong Answer: ", max1, max2);
        //     console.log(arr.toString())
        // }
    // }
    console.log(max(arr));
    process.exit();
}

function max(arr) {
    // write your code here
    if (arr.length === 1) return arr[0];
    let max = [0, 0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= max[1]) {
            max.push(arr[i]);
            max.shift();
        } else if (arr[i] > max[0]) {
            max.shift();
            max.unshift(arr[i]);
        }
    }
    return max[0] * max[1]; // 2,7,37,31 => 7 37
}

// function maxslow(arr) {
//     if (arr.length === 1) return arr[0];
//     let max = -1;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (j !== i) {
//                 let t = arr[i] * arr[j];
//                 if (t > max) max = t; 
//             }
//         }
//     }
//     return max;
// }

module.exports = max;

//15,38,26,16,9,25,3,12,34,10,32,40,18,4,37,6,18,16,15,4,36,28,20,24,16,31,30,9,29,28,20,3,24,14,36
// max     1296 = 36 * 36
// maxslow 1520 = 40 * 38

//24,25,35,25,7,36,8,10,8,35,19,24,16,9,2,17,7,36,18,3
// max     1260 = 35 * 36
// maxslow 1296 = 36 * 36