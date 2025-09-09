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
    for (let t = 0; t < testCases; t++) {
        let n = parseInt(input[line++]);
        let a = input[line++].trim().split(' ').map(Number);
        let b = input[line++].trim().split(' ').map(Number);
        solve(n, a, b);
    }
}

function solve(n, a, b) {
    b.sort((x, y) => y - x);
    a.sort((x, y) => y - x);

    let numberGreaterThanIndexInAatB = Array(n).fill(0);
    let j = 0;

    for (let i = 0; i < n; i++) {
        while (j < n && a[j] > b[i]) {
            j++;
        }
        numberGreaterThanIndexInAatB[i] = j - i;
    }

    let res = 0;

    console.log(Math.abs(numberGreaterThanIndexInAatB.reduce((x, y) => (x * y) % 1000000007, 1)));

}