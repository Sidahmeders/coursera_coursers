// js stress testing module

/*
[1, 2, 3, 4, 4, 4, 4, 6, 6, 6, 12, 21, 32, 45, 64]
[2, 3, 4, 5, 6, 7, 8, 4, 43, 2, 6, 6, 3, 3, 21]
*/

function binarySearch(arr = [], key) {
    let res = [];
    for (let k = 0; k < key.length; k++) {
        let lo = 0;
        let hi = arr.length -1;
        let mid = 0;

        while (lo < hi) {
            if (key[k] == arr[lo]) res[k] = lo;
            if (key[k] == arr[hi]) res[k] = hi;
            mid = Math.round(((hi + lo) /2) + 0.1);
            
            if (key[k] == arr[mid]) {
                res[k] = mid;
                lo = mid +1;
            }
            else if (key[k] > arr[mid]) lo = mid +1;
            else if (key[k] < arr[mid]) hi = mid -1;
        }
        if (res.length-1 !== k) res.push(-1);
    }
    return res.toString().replace(/,/g, " ");
}

// stress testing function ...
function bn_s(arr = [], key) {
    let res = [];
    for (let x = 0; x < key.length; x++) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == key[x]) res[x] = i;
        }
        if (res.length !== x+1) res.push(-1);
    }
    return res.toString().replace(/,/g, " ");
}

// stress test calls ....
const arr = [];
for (var i=0, t=10; i<t; i++) {
    arr.push(Math.round(Math.random() * t));
}
const keys = [];
for (var i=0, t=10; i<t; i++) {
    keys.push(Math.round(Math.random() * t));
}

let t1 = binarySearch();
let t2 = bn_s();

t1 = t1.toString();
t2 = t2.toString();

if (t1 == t2) {
    console.log("ok");
}
else {
    console.log("wrong answer!", '\n',`binary: ${t1}`, '\n', `linear: ${t2}`);
}
