// we have N a number of candidate and a K prize 
// the goal is to make K prizes from N .. 
// example: N = 9 and  we need to find K_1 and K_2 ... K_n that can go into N
// and K_1 < K_2 < K_n and all the K from 1 to N combined should eaqul N >> k_1 + K_2 + k_n = N
// Input: N = 9; 
// Output: 3 
// N = 9 = k_n = 1 + 2 + 6 = length_3 or 3 gropus.


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(max_prize(parseInt(line, 10)));
    process.exit();
}

function max_prize(n) {
    let grp = [];
    for (let i = 1; i <= n; i++) {
        if (i == 1) grp.push(i);
        else {
            grp.push(i);
        }
        n -= i;
    }
    if (n > 0) grp[grp.length-1] +=n;
    let res = `${grp.length}\n${grp.toString().replace(/,/g, " ")}`;
    return res;
}

// 4  => 1
// 3  => 3
// -------
// 6  => 1
// 5  => 2
// 3  => 3
// -------
// 9  => 1 
// 8  => 2
// 6  => 3
// -------
// 22 => 1
// 21 => 2
// 19 => 3
// 16 => 4
// 12 => 5
// 7  => 7
