// we are given an int .1 <= N <= 10**6. and a calculator that can only do three operations
// add 1, multiply by 2 && multiply by 3. and our goal is to return the minimum ways to get from 1 to N;

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    //console.log(primitive_calc_dynamic(parseInt(line)));
    // stress testing...
    for (let i = 10; i < 50; i++) {
        let dynamic = primitive_calc_dynamic(i);
        let greedy  = primitive_calc_greedy(i);
        if (dynamic.length == greedy.length) console.log("OK: Pass");
        else console.log(`dynami: ${dynamic}`,`\ngreedy: ${greedy}`);
    }
    process.exit();
}

// dynamic programming calculator
function primitive_calc_dynamic(n) { // n = 10
    let arr = []; // Array of length 11 > [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    for (let k = 0; k <= n; k++) {
        arr[k] = 0;
    }
    for (let i = 1; i < arr.length; i++) { // this will return an updated values = [0, 1, 2, 2, 3, 4, 3, 4, 4, 3, 4] 
        arr[i] = arr[i - 1] + 1;
        if (i % 2 == 0) arr[i] = Math.min(1 + arr[i / 2], arr[i]);
        if (i % 3 == 0) arr[i] = Math.min(1 + arr[i / 3], arr[i]);
    }
    let sequence = []; // [1 ,3 ,9 ,10]
    for (let i = n; i > 1;) { // i = 10; while i > 1
        sequence.unshift(i);
        if (arr[i - 1] == arr[i] - 1) i--;
        else if (i % 2 == 0 && (arr[i / 2] == arr[i] - 1)) i = i / 2;
        else if (i % 3 == 0 && (arr[i / 3] == arr[i] - 1)) i = i / 3;
    }
    sequence.unshift(1);
    return sequence.toString().replace(/,/g, ' ');
    let res = `${sequence.length-1}\n${sequence.toString().replace(/,/g, ' ')}`;
    return res;
}

// greedy calculator
function primitive_calc_greedy(n) {
    let arr = [];
    while(n >= 1) {
        arr.unshift(n);
        if (n % 3 == 0) n = (n /3);
        else if (n % 3 == 1) n-= 1;
        else if (n % 2 == 0) n = (n /2);
        else n-= 1;
    }
    return arr.toString().replace(/,/g, ' ');
    let res = `${arr.length-1}\n${arr.toString().replace(/,/g, ' ')}`;
    return res;
}
