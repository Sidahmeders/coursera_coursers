//

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [n] = line.toString().split(' ').map(Number);
    let count = 0;
    const val = [];

    rl.on('line', line => {
        const [a, b] = readLine(line);
        val[count] = [];
        val[count].push(a);
        val[count].push(b);

        if (++count >= n) {
            console.log(sign_col(n, val));
            process.exit();
        }
    });
});

function readLine(line) {
    const a = parseInt(line.toString().split(' ')[0], 10);
    const b = parseInt(line.toString().split(' ')[1], 10);
    return [a, b];
}

// waiting.........
function sign_col(n, val) {
    return [n, val];
}
