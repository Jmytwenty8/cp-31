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
    main();
});

function main() {
    let testCases = parseInt(input[0]);
    let line = 1;

    for (let i = 0; i < testCases; i++) {
        let [n, x] = input[line++].split(" ").map(Number);
        let a = input[line++].split(" ").map(BigInt);
        solve(n, x, a);
    }
}

function findWater(h, a) {
    let total = 0n;  // Use BigInt
    for (let i = 0; i < a.length; i++) {
        if (h > a[i]) {
            total += BigInt(h - a[i]);
        }
    }
    return total;
}

function solve(n, x, a) {
    // Convert x to BigInt for comparison
    x = BigInt(x);

    // Find the maximum initial column height (BigInt)
    let maxA = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > maxA) maxA = a[i];
    }

    let lo = 1n;
    let hi = maxA + x + 1n;

    while (lo < hi) {
        let mid = (lo + hi) / 2n;
        mid = mid - (mid % 1n); // floor for BigInt

        if (findWater(mid, a) <= x) {
            lo = mid + 1n;
        } else {
            hi = mid;
        }
    }

    console.log((lo - 1n).toString());
}