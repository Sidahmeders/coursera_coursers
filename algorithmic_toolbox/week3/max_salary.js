// the algorithim is very staightforward all we need to do is to arrange the numbers to get the maximum value;
// 78 9 32 is gonna eqaul 97832

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

rl.once('line', line => {
    const n = parseInt(line);
    

    rl.on('line', line => {
        const arr = line.split(" ")//.map(item => parseInt(item));
        console.log(max_sal(n, arr));
        process.exit();
    });
});

function max_sal(n, arr) {
    let res = "";
    while (arr.length) {
        let max = -Infinity;
        let inx = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                if (i == 0) {
                    max = parseInt(arr[i]);
                } else {
                    if (parseInt(arr[i][j]) > parseInt(max.toString()[j])) {
                        max = parseInt(arr[i]);
                        inx = i;
                    } else if (arr[i].length < max.toString().length) {
                        max = parseInt(arr[i]);
                        inx = i;
                    }
                }
            }
        }
        res = res + max.toString();
        arr.splice(inx, 1);
    }
    return res;
}

/*
2
21 2 => 221
---
5
9 4 6 1 9 => 99641
---
3
23 39 92 => 923923
---
8
11 34 12 99 33 993 997 994 => 99.997.994.993.34.33.12.11
*/
