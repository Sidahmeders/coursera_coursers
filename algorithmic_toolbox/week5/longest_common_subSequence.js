// we have to array sequences and we have to find the subseqaunce of these two arrays
// example [1 2 3 4] [8 2 5 6 4]; return 2 => [2 4] subsequence

const readline = require('readline');
const { count } = require('console');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let a = parseInt(line);
    let aSeq;
    let b;
    let bSeq;
    let count = 0;
    rl.on('line', line => {
        if (count == 0) aSeq = line.split(" ").map(Number);
        if (count == 1) b = parseInt(line);
        if (count == 2) bSeq = line.split(" ").map(Number);
        if (++count > 2) {
            console.log(longest_common_sub_suq(a, aSeq, b, bSeq))
            process.exit();
        }
    });
});

function longest_common_sub_suq(a, aSeq, b, bSeq) { // [2 7 8 3] [5 2 8 7] OR [1 2 3 4] [8 2 5 6 4]
    let sequence = [];

    for (let i = 0; i < b; i++) {
        for (let j = 0; j < a; j++) {
            if (aSeq[j] == bSeq[i]) sequence.push(bSeq[i]);
        }
    }
    
    let seqLength = 0; // 2 8 7

    for (let i = 0; i < sequence.length; i++) {
        if (sequence[0] <= sequence[i]) seqLength++;
    }

    return seqLength; // i get stuck....
}
