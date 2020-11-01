// tree height

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
        console.log(tree_height(n, arr))
        process.exit();
    });
});

// T1: 5, 4 -1 4 1 1              => 3;
// T2: 5, -1 0 4 0 3              => 4;
// T3: 10, 9 7 5 5 2 9 9 9 2 -1   => 4;

// T4:100, 96 61 95 34 12 26 48 42 69 74 90 67 8 53 65 0 14 47 88 8 49 4 93 75 6 29 -1 62 87 12 42 52
//   1 46 4 83 14 75 72 95 15 86 29 53 85 78 65 31 5 96 6 74 87 24 15 90 22 85 20 46 78 97 50 97 69 19
//   21 61 92 5 22 47 63 1 93 28 20 34 52 21 72 88 67 0 86 49 63 48 28 25 50 83 31 19 62 24 64 64 92 25 => 8;


function tree_height(n, nodes) {
    if (tree_height == null) return;

    let node;
    for (let i = 0; i < nodes.length; i++) {
        node = nodes[i];
    }
}


class Tree {
    constructor(node) {
        this.node = node;
    }
}


let n1 = new Tree("cool tree");
console.log(n1);


// 96 61 95 34 12 26 48 42 69 74 90 67 8 53 65 0 14 47 88 8 49 4 93 75 6 29 -1 62 87 12 42 52 1 46 4 83 14 75 72 95 15 86 29 53 85 78 65 31 5 96 6 74 87 24 15 90 22 85 20 46 78 97 50 97 69 19 21 61 92 5 22 47 63 1 93 28 20 34 52 21 72 88 67 0 86 49 63 48 28 25 50 83 31 19 62 24 64 64 92 25

