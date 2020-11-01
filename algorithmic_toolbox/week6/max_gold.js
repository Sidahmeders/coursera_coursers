// we have W Capacity of sack, N bars of gold and we want to fill this sack with maximum weight of gold
// example W=10 and N=3, of bars 1 4 8 => take 8 && 4 and return 9 the max weight;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

rl.once('line', line => {
    let [W, n] = [parseInt(line.split(" ")[0]), parseInt(line.split(" ")[1])];
    process.stdin.setEncoding('utf8');
    rl.on('line', readLine);

    function readLine(line) {
        let bars = line.split(" ").map(Number);
        console.log(max_gold_dynamic(W , n, bars));
        process.exit();
    }
});


function max_gold_dynamic(W, n, bars) {
    let table = []; // 4 rows, 20 column

    for (let i = 0; i < n; i++) {
        table[i] = [];
        for (let k = 0; k <= W; k++) {
            table[i][k] = 0;
        }
    }
       
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < W; j++) {
            
        }
    }

}

function max_gold_greedy(W, n, bars) {  // l1= 10 3 l2= 1 4 8 return = 9;
    bars.sort((a,b) => b-a);
    let maxWeight = 0;

    for (let i = 0; i < n; i++) {
       if (W - bars[i] >= 0) {
           maxWeight += bars[i];
           W-= bars[i];
       }
    }

    return maxWeight;
}
