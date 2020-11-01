// we have N slots of adds and A is the value of the add and B is the clicks on The add
// the problem is to maximize the N slots which we mean A_max * B_max and we keep going down...

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let n = parseInt(line);
    let a = [];
    let b = [];
    let count = 0;
    rl.on('line', line => {
        if (count == 0) a = line.split(" ").map(item => parseInt(item));
        if (count == 1) b = line.split(" ").map(item => parseInt(item));
        if (++count > 1) {
            console.log(max_adds(n, a, b))
            process.exit();
        }
    });
});

function max_adds(n, a, b) {
    let max_pair = 0;
    a.sort((a,b) => a-b);
    b.sort((a,b) => a-b);
    for (let i in a) {
        max_pair += parseFloat(a[i]) * parseFloat(b[i]);
    }
    return max_pair.toLocaleString('fullwide', {useGrouping:false});
}

/*
the 1_line as N = number of slots
and each slot of N have A = the money paid from a click
                        B = the number of clicks on the add
and we are looking for the maxmial value from each add

n = 3
a = 2 34 -2
b = 7 4 9

the output : (34 * 9) + (2 * 7) + (-2 * 4) = 312
*/
