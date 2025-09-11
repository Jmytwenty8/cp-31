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


function main() {
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let n = parseInt(input[line++]);
        let a = input[line++].trim().split(' ').map(Number);
        let b = input[line++].trim().split(' ').map(Number);
        solve(n, a, b);
    }
}

function solve(n, a, b) {

    let l = 0;
    while (l < n && a[l] === b[l]) l++;

    let r = n - 1;
    while (r >= 0 && a[r] === b[r]) r--;

    // Try expanding to the left and right while it’s still valid
    while (l > 0 && b[l - 1] <= b[l]) l--;
    while (r + 1 < n && b[r] <= b[r + 1]) r++;

    // Output in 1-based indexing
    console.log((l + 1) + " " + (r + 1));

}