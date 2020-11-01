// we have [1, 3, 4] and we have an int N, 1<= N <= 1000 and we are trying to find the minmuim number of coin change.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    //console.log(money_change_dynamic(parseInt(line)));
    for (let i = 0; i < line; i++) {
        let greedy = money_change_greedy(parseInt(i));
        let dynamic = money_change_dynamic(parseInt(i));

        if (greedy == dynamic) console.log("OK");
        else console.log(i);
    }

    process.exit();
}

/*
  N = 12;
  0  1  2  3  4  5   6  7   8   9   10  11  12 
 [0, 1, 2, 1, 2, 1, 13, 13, 13, 13, 13, 13, 13]

 (6 - 1=>0 greater or equal 0) arr[6] = min(13, arr[i -coin] +1)
*/
function money_change_dynamic(n, coins = [1, 3, 4]) { // 6 should return 2 not 3
    let arr = []; // [n+1, n+1, ..N_th];
    for (let i = 0; i <= n; i++) {
        arr[i] = n+1;
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < coins.length; j++) {
            if (i == 0) arr[i] = 0;
            if (i - coins[j] >= 0) arr[i] = Math.min(arr[i], arr[i -coins[j]] +1);
        }
    }
    return arr[n];
}

// the recursive solution for the Hanoi Towers
function hanoi_towers(n) {
   if (n < 2) return 1;
   return hanoi_towers(n -1) * 2 +(1);
}

/* Recursion.. ..
Imagine we have only 5- and 7-coins. One can prove that any large enough integer amount can be paid 
using only such coins. Yet clearly we cannot pay any of numbers 
1, 2, 3, 4, 6, 8, 9 with our coins. What is the maximum amount that cannot be paid?
*/
function coins_ch(n) {
    if (n < 5 || n == 6 || n == 8 || n == 9) return "no change is Found..";
    if (n == 5) return [5];
    if (n == 7) return [7];
    if (n == 10) return [5, 5];
    if (n == 12) return [7, 5];
    if (n == 14) return [7, 7];
    let x;
    n % 5 == 0 ? x = 5 : x = 7;
    let coins = coins_ch(n - x);
    let sw;
    (coins instanceof Array) ? coins.push(x) : sw = true;
    if (sw) return "no change for this one";
    return coins;
}
 
/*
this a greedy algorithm but will give us the wrong answer in some cases;
 naive solution
 define our coins [4 3 1]
 N = 16;
 count = 1;
 pointer = 0;
 while n is true && pointer < 3
 check if our current coin can go through N
   then substract Current_coin from N
   else move the pointer by one 

 finally return the count; // 
*/
function money_change_greedy(n, coins = [4, 3, 1]) {
    let count = 0; //1
    let pointer = 0;// 
    let change;
    while (n && pointer < 3) {
        change = coins[pointer];
        if (n - change >= 0) {
            n-= change;
            count++;
        }
        else pointer++;
    }
    return count;
}
