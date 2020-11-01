// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(fib(parseInt(line, 10)));
    process.exit();
}

function fib(num) {
    // write your code here
    if (num <= 1) return num;
    let arr = [1, 1];
    for (let i = 2; i < num; i++) {
        arr[i] = arr[i - 1] + arr[i -2]
    }
    return arr[num-1];
}

// slow algorithim 
function sumFibs(num) {
    if (num <= 1) return num;
    else return sumFibs(num -1) + sumFibs(num -2);
}


module.exports = fib;

// Big O related....
// function ss(n) {
//     console.log("n^4 ", 20 * 10 * 10 * 10 * 10);
//     console.log("2^n ", 20 * 20);
// }