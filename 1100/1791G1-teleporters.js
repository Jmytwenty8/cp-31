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
        let [n, c] = input[line++].split(' ').map(Number);
        let a = input[line++].split(' ').map(Number);
        solve(n, c, a);
    }
}

function solve(n, c, a) {
    let costArr = a.map((x, index) => x + index + 1);
    costArr.sort((x, y) => x - y);
    let usedTele = 0;

    let i = 0;
    while (c > 0 && i < n && c >= costArr[i]) {
        c -= costArr[i++];
        usedTele++;
    }

    console.log(usedTele)
}