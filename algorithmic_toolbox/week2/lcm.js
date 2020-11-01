// by Sidahmed boutaraa

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.on('line', readLine);

function readLine(line) {
    if (line !== "\n") {
        const a = parseInt(line.toString().split(' ')[0], 10);
        const b = parseInt(line.toString().split(' ')[1], 10);

        console.log(lcm(a, b));
        process.exit();
    }
}

// fast algorithim
function lcm(a, b) {
  // write your code here
  if (a === b) return a;
  let m = Math.max(a, b);
  while (true) {
    if (m % a === 0 && m % b === 0) return m;
    m+= Math.max(a, b);
  }
}
// 714552 374513 => 170777928
// 239    456

// slow algorithim.
function lcmslow(a, b) {
  // write your code here
  if (a === b) return a;
  let m = Math.max(a, b);
  while (true) {
    if (m % a === 0 && m % b === 0) return m;
    m++;
  }
}

module.exports = lcm;  
