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
        let arr = input[line++].trim().split(' ').map(Number);
        solve(n, arr);
    }
}

function solve(n, arr) {
    arr.sort((a, b) => a - b);
    if (arr[0] !== 1) {
        console.log("NO");
        return;
    }

    let sum = 1;
    for (let i = 1; i < n; i++) {
        if (sum < arr[i]) {
            console.log("NO");
            return;
        }
        sum += arr[i];
    }
    console.log("YES");
}