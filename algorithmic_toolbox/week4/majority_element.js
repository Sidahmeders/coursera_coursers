/*
we have an N Element a_1 a_2...a_N and we are trying to find if there is a majority number
for exmaple we have [2 3 4 3 2 3 4 4] the arr length is 8 and there is no number repeted more 
then the half of the array so there is no majority
but for this array we have [6 2 4 6 6] and here we found one array length of 5 and half the array is 2.5
and the number 6 is repeated 3 times so 3 > 2.5 so we have a winner or a majority number.
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let n = parseInt(line);
    rl.on('line', line => {
        let arr = line.split(' ').map(Number);
        console.log(majority_el(n, arr))
        process.exit();
    });
});

function majority_el(n, arr) {
    let len = arr.length;
    let obj = {};
    for (let i = 0; i < len; i++) {
        let k = arr[i];
        if (!obj[k]) obj[k] = 1;
        else if (obj[k]) obj[k]++; 
    }
    for (let key in obj) {
        if (obj[key] > len/2) return 1;
    }
    return 0;
}
