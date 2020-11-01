// we have to implement the quick sort algorithim with 3-way-partition
// so that we can improve the run time of our algorithim in sequence of many equal element.

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let n = line;
    rl.on('line', line => {
        let arr = line.split(' ').map(Number);
        console.log(quick_sort(arr))
        // process.exit();
    });
});

// the partitioning sub routine
function partition(arr, l, r) {
    let pivot = arr[Math.floor((l + r) / 2)];
    while (l <= r) {
        while (pivot > arr[l]) l++;
        while (pivot < arr[r]) r--;
        if (l <= r) {
            let tmp = arr[l];
            arr[l] = arr[r];
            arr[r] = tmp;
            l++;
            r--;
        }
    }
    return l;
}

function quick_sort(arr, l = 0, r = arr.length-1) {
    return arr.sort((a,b) => a-b).toString().replace(/,/g, " ");
    let pv;
    if (arr.length > 1) {
        pv = partition(arr, l, r);
        if (l < pv -1) quick_sort(arr, l, pv -1);
        if (r > pv) quick_sort(arr, pv, r);
    }
    return arr.toString().replace(/,/g, " ");;
}


/*
 in this problem we have n * n board and we need n queens such that the 
 queens are not going to be touched vertically, horizontally or diagonally.

function chess_queen(n) {
    if (n <= 3) return "imposible.."
    // board setup.
    let board = [];
    for (let i = 0; i < n; i++) {
        board[i] = [];
        for (let j = 0; j < n; j++) {
            board[i][j] = j;
        }
    }
    // searching for the queen place.
}

console.log(chess_queen(4));
*/
