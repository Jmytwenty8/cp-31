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
    main();
});

function main() {
    let t = parseInt(input[0]);
    let line = 1;

    for (let _ = 0; _ < t; _++) {
        let n = parseInt(input[line++]);
        let a = input[line++].split(' ').map(Number);
        solve(n, a);
    }
}

function solve(n, a) {
    let negatives = 0;
    let minAbs = Math.abs(a[0]);
    let sum = 0n;
    for (let i = 0; i < n; i++) {
        if (a[i] < 0) negatives++;
        let absVal = Math.abs(a[i]);
        if (absVal < minAbs) minAbs = absVal;
        sum += BigInt(absVal);
    }

    if (negatives % 2 === 0) {
        console.log(sum.toString());
    } else {
        console.log((sum - 2n * BigInt(minAbs)).toString());
    }
}