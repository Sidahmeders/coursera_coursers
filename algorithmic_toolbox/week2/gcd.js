// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(gcd(a, b));
        process.exit();
    }
}

function gcd(a, b) {
    // write your code here
    let best = Math.max(a, b) % Math.min(a, b);
    if (best === 0) return Math.min(a,b);
    else return gcd(Math.min(a, b), best);
}
// (357 % 234)
// (234 % 123)
// (123 % 111)
// (111 % 12)
// (12 % 3)
// 0

// 10 , 7
// 7 , 3
// 3 , 1
// 0

//slow algorithim
function gcdslow(a, b) {
    let best = 0;
    for (let i = 0; i < Math.min(a,b); i++) {
        if (a / i % 1 === 0 && b / i % 1 === 0) best = i;
    }
    return best
}

module.exports = gcd;
