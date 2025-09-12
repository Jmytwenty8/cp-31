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
        let n = input[line++].trim().split('').map(Number);
        solve(n);
    }
}

function solve(n) {
    // Handle circular string by doubling the array
    arr = n.concat(n);
    let maxConsecutive = 0, curr = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            curr++;
            maxConsecutive = Math.max(maxConsecutive, curr);
        } else {
            curr = 0;
        }
    }
    maxConsecutive = Math.min(maxConsecutive, n.length);

    if (maxConsecutive === 0) {
        console.log(0);
        return;
    }
    if (maxConsecutive === n.length) {
        console.log(n.length * n.length);
        return;
    }
    let ans = Math.floor((maxConsecutive + 1) / 2) * Math.floor((maxConsecutive + 2) / 2);
    console.log(ans);
}