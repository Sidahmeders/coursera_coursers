// Tail recusion

function tailAdd(n, sum = 0) {
    if (n == 0) return sum;
    return tailAdd(n-1, sum + n);
}

console.log(tailAdd(5));

// Normal recusion

function normalAdd(n) {
    if (n == 0) return n;
    return n + normalAdd(n-1);
}

console.log(normalAdd(5));
