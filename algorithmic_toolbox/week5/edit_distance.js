// find the minimum edit distance between two strings;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});
rl.once('line', line => {
    let line1 = line;
    process.stdin.setEncoding('utf8');
    rl.on('line', readLine);

    function readLine(line) {
        console.log(edit_ditance(line1 ,line));
        process.exit();
    }
});

function edit_ditance(st1, st2) { // A= st1, B= st2;
    // set up the table
    let sequance = [];
    for (let i = 0; i <= st2.length; i++) {
        sequance[i] = [i];
        for (let j = 0; j <= st1.length; j++) {
            if (j == 0) continue;
            else sequance[i][j] = j;
        }
    }
    // compare the values and return the min distance from A to B.
    for (let i = 0; i < st2.length; i++) {
        for (let j = 0; j < st1.length; j++) {
            if (st1[j] == st2[i]) sequance[i+1][j+1] = sequance[i][j];
            else sequance[i+1][j+1] = Math.min(sequance[i][j+1], sequance[i+1][j], sequance[i][j]) +1;
        }
    }
    return sequance[st2.length][st1.length];
}

//inx    0 1 2 3
//       a b c d
//    0. 1 2 3 4
//0 a 1. 0 1 2 3
//1 z 2. 1 1 2 3
//2 c 3. 2 2 1 2
