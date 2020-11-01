// we have N items of [V1, V2,...Vn] and we want to know if we can partition these items in three equal halves.
// example: N = 7; [12, 10, 5, 20, 10, 8, 5]; [12 + 8 + 5] => [20 + 5] => [10 + 10] this is not possible..

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let n = parseInt(line);
    rl.on('line', line => {
        let svn = line.split(' ').map(Number);
        console.log(partitioning_souvenirs(n, svn))
        process.exit();
    });
});


function partitioning_souvenirs(n, svn) { // 12 10 5 20 10 8 5 , 17 59 34 57 17 23 67 1 18 2 59
    
    if (n == 1) return 
}
 