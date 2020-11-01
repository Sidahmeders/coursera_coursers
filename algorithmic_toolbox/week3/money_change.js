const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    console.log(moneyChange(parseInt(line, 10)));
    process.exit();
}

function moneyChange(n) {
    // write your code here
    let change = n;
    let arr = [];
    while (change > 0) {
        if (change / 10 >= 1) {
            arr.push(10);
            change -= 10;
        }
        else if (change / 5 >= 1) {
            arr.push(5);
            change -= 5;
        }
        else {
            arr.push(1);
            change -= 1;
        }
    }
    return arr.length;
}

module.exports = moneyChange;

/*
we have an input of an integer
and the output should be a sum of all the numbers from [1, 5, 10] that goes into the input integer

declare an array [1, 5, 10]

change = input_integer
counter = 0

we keep looping & chek if conunter < input_integer

if input % array[2] < change
counter = counter + 1
change = change - array[2]

if input % array[1] < change
counter = counter + 1
change = change - array[1]

if input % array[0] < change
counter = counter + 1
change = change - array[0]

at the end we will return the counter;

[10, 5, 1]
5 => 5
28 => 10 10 5 1 1 1


*/

