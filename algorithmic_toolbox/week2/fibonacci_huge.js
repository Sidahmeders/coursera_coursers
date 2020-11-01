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
        const n = parseInt(line.toString().split(' ')[0], 10);
        const m = parseInt(line.toString().split(' ')[1], 10);

        console.log(getFibMod(n, m));
        process.exit();
    }
}

function pisanoPeriod(m) {
    let [pre, cur, temp] = [0, 1];
    for (let i = 0; i < m * m; i++) {
        temp = cur;
        cur = (pre + cur) % m;
        pre = temp;
        if (pre === 0 && cur === 1) return i + 1;
    }
}

function getFibMod(n, m) {
    // write your code here
    let remainder = n % pisanoPeriod(m);
    let [fir, sec, res] = [0, 1, undefined];
    for (let i = 1; i < remainder; i++) {
        res = (fir + sec) % m;
        fir = sec;
        sec = res;
        console.log(i)
    }
    return res % m;
}

module.exports = getFibMod;
