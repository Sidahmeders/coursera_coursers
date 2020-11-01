// by Alexander Nikolskiy

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');
rl.once('line', line => {
    const arr = line.toString().split(' ').slice(1).map(Number);

    rl.once('line', line => {
        const keys = line.toString().split(' ').slice(1).map(Number);
        const result = [];
        for (let key of keys) {
            result.push(binarySearch(arr, key));
            
        }
        const res = result.join(' ');
        const maxLength = 50000;
        for (let i = 0; i < res.length; i += maxLength) {
            process.stdout.write(res.slice(i, i + maxLength));
        }

        process.stdout.write('\n');
        // process.exit();
    })
});

function binarySearch(arr = [], key) {
    let lo = 0;
    let hi = arr.length-1;
    let mid = 0;
    while (lo < hi) {
        if (key == arr [lo]) return lo;
        if (key == arr[hi]) return hi;
        mid = Math.round(((hi + lo) /2) + 0.1);
        if (key == arr[mid]) return mid;
        else if (key > arr[mid]) lo = mid+1;
        else if (key < arr[mid]) hi = mid -1;
    }
    return -1;
}

function bs(arr = [], key) {
    for (let i = 0; i < arr.length; i++) {
        if (key == arr[i]) return i;
    }
    return -1;
}

module.exports = binarySearch;

/*
we have two arrays of a given length 
for example 2 arr of length 6 = arr1 => [1 4 5 6 8 9] for -2 we return -1 && 3 return -1 && 4 return 1
                                arr2 => [-2 3 4 1 2 8] && return 0 && for 8 return 4 which is the index
*/
