const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    main();
});

function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function main() {
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let t = 0; t < testCases; t++) {
        let n = parseInt(input[line++]);
        let a = input[line++].trim().split(' ').map(Number);
        solve(n, a);
    }
}

function solve(n, a) {
    let ans = 0;
    let i = 0;
    let j = n - 1;


    // a[i] mod ans = a[j] mod ans
    // a[i] - a[j] mod ans = 0
    // ans is a divisor of (a[i] - a[j])

    while (i < j) {
        ans = gcd(ans, Math.abs(a[i] - a[j]));
        i++;
        j--;
    }

    console.log(ans);
}