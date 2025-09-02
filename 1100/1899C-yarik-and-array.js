const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
});

rl.on('close', () => {
    let t = parseInt(input[0]);
    let idx = 1;

    for (let i = 0; i < t; i++) {
        let n = parseInt(input[idx++]);
        let a = input[idx++].split(' ').map(Number);
        solve(n, a);
    }
});

function solve(n, a) {
    let curSum = a[0];
    let maxSum = curSum;

    for (let i = 1; i < n; i++) {
        if ((Math.abs(a[i] % 2) !== Math.abs(a[i - 1] % 2))) {
            curSum = Math.max(a[i], curSum + a[i]);
        } else {
            curSum = a[i];
        }
        maxSum = Math.max(maxSum, curSum);
    }

    console.log(maxSum);
}