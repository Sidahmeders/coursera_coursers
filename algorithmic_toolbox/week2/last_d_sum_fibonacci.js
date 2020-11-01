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
    if (n == 0) return 0;
    if (n == 1) return 1;
    let f0 = 0;
    let f1 = 1;
     
    let rem = n % 60;
    if(rem == 0) return 0;
    for(let i = 2; i < rem + 3; i++) {
       let f = (f0 + f1) % 60;
       f0 = f1;
       f1 = f;
    }
    let s = f1 - 1;
    let ss = s.length <= 1 ? s : s.toString().split("")[s.toString().split("").length-1];
    return parseInt(ss);
}

module.exports = fib;
