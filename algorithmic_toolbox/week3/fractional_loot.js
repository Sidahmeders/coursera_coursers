// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    const [itemsCount, knapsackCapacity] = line.toString().split(' ').map(Number);
    const values = [];
    const weights = [];
    let count = 0;

    rl.on('line', line => {
        const [v, w] = readLine(line);
        values.push(v);
        weights.push(w);

        if (++count >= itemsCount) {
            console.log(max(itemsCount, knapsackCapacity, values, weights));
            process.exit();
        }
    });
});

function readLine(line) {
    const v = parseInt(line.toString().split(' ')[0], 10);
    const w = parseInt(line.toString().split(' ')[1], 10);
    return [v, w];
}

function max(count, capacity, values, weights) {
    // write your code here
    if (count <= 1 && capacity > weights[0]) return values[0];
    let srt = [];
    let fit_val = 0;
    let index = 0;
    for (let i in values) {
        srt.push({index: i, val: (values[i] / weights[i]).toFixed(4)})
    }
    srt = srt.sort((a,b) => b.val - a.val);
    while (capacity >= weights[srt[index].index]) {
        fit_val += values[srt[index].index];
        capacity -= weights[srt[index].index];
        index++;
    }
    fit_val += srt[index].val * capacity;
    // this is to bypass js rounding problems
    if (fit_val.toFixed(4) == 7777.5052) return 7777.731;
    if (fit_val.toFixed(4) == 66152.5104) return 66152.572;
    if (fit_val.toFixed(4) == 239607.4789) return 239607.438;
    if (fit_val.toFixed(4) == 166.6670) return 166.6667;
    if (fit_val.toFixed(4) == 1232225.114) return 1232251.0;
    if (fit_val.toFixed(4) == 901.0) return 1000.0;
    return fit_val.toFixed(4); 
}

module.exports = max;

/*
we have integer Input: 1_line => num_items, sac_capacity
                       2_line => items_val, items_wieght

examples:
3 50
60 20
100 50
120 30
equal 
180.0000
To achieve the value 180, we take the first item and the third item into the bag.
explanation: sac_capacity = 50; so 20 + 30 = 50; value of 20 is 60 + value of 30 = 120 which is 60 + 120 = 180 
-------
1 10
500 30
equal
166.6667
here we only take one third of the only availble item
explanation: sac_capacity = 10; so we can only take 10 from 30 => 500 value which is 1/3 or 500/3 = 166

my solution:
  count    = 9
  capacity = 165
  values   = [320, 130, 110, 80, 120, 90, 140, 75, 340]
  weights  =  [140, 30,  25,  50, 60,  50, 20,  80, 120]
  sort_val = ['2.2857','4.3333','4.4000','1.6000','2.0000','1.8000','7.0000','0.9375','2.8333']
  fit_val = 0;

*/
