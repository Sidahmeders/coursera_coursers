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

function fib(n) {
    // write your code here
    if (n <= 1) return n;
    let arr = [1, 1];
    for(let i = 2; i < n; i++) {
        arr.push((arr[0] + arr[1]) % 10);
        arr.shift();
    }
    return arr[1];
}

module.exports = fib;
