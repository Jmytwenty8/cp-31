const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
});

rl.on("close", () => {
    // Process the input array here
    main();
});

function main() {
    let testCases = parseInt(input[0]);
    let line = 1;
    for (let i = 0; i < testCases; i++) {
        let [n, q] = input[line++].split(" ").map(Number);
        let a = input[line++].split(" ").map(Number);
        let x = input[line++].split(" ").map(Number);
        solve(n, q, a, x);
    }
}

function solve(n, q, a, x) {
    let prev = 31;
    for (let i = 0; i < q; i++) {
        if (x[i] >= prev) continue;
        let val = Math.pow(2, x[i]);
        for (let j = 0; j < n; j++) {
            if (a[j] % val === 0) a[j] += val / 2;
        }
        prev = x[i];
    }
    console.log(a.join(" "));
}
