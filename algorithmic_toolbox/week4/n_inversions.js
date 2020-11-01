// we have unsorted array and we have to count how many times we have to swap elements to get to a sorted array
// for example [2 3 9 2 9] => [2, 2, 3, 9, 9]
// This problem can be solved by modifying the merge sort algorithm. For this, we change both the 
// Merge andMergeSort procedures

const readline = require('readline');
const { memory } = require('console');
const rl = readline.createInterface({
    input: process.stdin,
    terminal: false
});

process.stdin.setEncoding('utf8');

rl.once('line', line => {
    let n = line;
    rl.on('line', line => {
        let arr = line.split(' ').map(Number);
        console.log(number_of_inversions(arr))
        process.exit();
    });
});                                             // 2 3 9 2 9 6 8 7

const split = (arr, l, r) => {
    if (l >= r) return;
    let mid = Math.floor((l + r) /2);
    split(arr, l, mid);
    split(arr, mid+1, r);
}

const merge_sort = (arr, l, r) => {
    let sorted_arr = [];
    let left = arr[l];
    let right = arr[r];
    if (left < right) {
        sorted_arr[0] = left;
        sorted_arr[1] = right;
    } else if (left > right) {
        sorted_arr[0] = right;
        sorted_arr[1] = left;
    }
    return sorted_arr;
}
  
function number_of_inversions(arr, l = 0, r = arr.length-1) { 
    return split(arr, l, r);
}
