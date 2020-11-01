// find the minimum refill in a gas station from A to B
// A = X0 <= X1 <= X2 <= ..., Xn <= Xn+1 = B

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let distance = parseInt(line);
    let meter = null;
    let n_stations = null;
    let stations = [];
    let count = 0;
    rl.on('line', line => {
        if (count == 0) meter = parseInt(line);
        if (count == 1) n_stations = parseInt(line);
        if (count == 2) stations = line.split(" ").map(item => parseInt(item));
        if (++count > 2) {
            console.log(minRefill(distance, meter, n_stations, stations))
            process.exit();
        }
    });
});

function minRefill(dis, mtr, n_sts, sts) {
    sts.push(dis);
    let tank  = mtr;
    let mnFil = 0;
    for (let i = 0; i <= n_sts; i++) {
        if (i == 0) {
            if (sts[i] <= tank) tank -= sts[i];
            else return -1;
        }
        if (i >= 1) {
            if ((sts[i -1] + tank) >= sts[i]) tank -= (sts[i] - sts[i-1]);
            else if ((sts[i -1] + tank) < sts[i]) {
                mnFil++;
                tank = mtr - (sts[i] - sts[i-1]);
            }
            if (sts[i-1] + mtr < sts[i]) return -1;
        }
    }
    return mnFil;
}

// 700
// 200
// 4
// 100 200 300 400
// ------
// dist_frm_A_B = 950
// mtr_can_trvl = 400
// gas_st_num   = 4
// gas_stations = [200, 375, 550, 750] => 2
