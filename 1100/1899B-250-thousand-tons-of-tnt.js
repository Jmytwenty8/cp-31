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
        let n = parseInt(input[line++]);
        let a = input[line++].split(" ").map(Number);
        solve(n, a);
    }
}

function solve(n, a) {
    // Build prefix sums
    const prefix = [0];
    for (let x of a) prefix.push(prefix[prefix.length - 1] + x);

    let maxDiff = 0;

    // Collect all divisors of n
    const divisors = [];
    for (let d = 1; d * d <= n; d++) {
        if (n % d === 0) {
            divisors.push(d);
            if (d * d !== n) divisors.push(n / d);
        }
    }

    // For each valid block size
    for (let size of divisors) {
        let mn = Infinity;
        let mx = -Infinity;

        // Compute sum of each block of length `size`
        for (let start = 0; start + size <= n; start += size) {
            const sum = prefix[start + size] - prefix[start];
            mn = Math.min(mn, sum);
            mx = Math.max(mx, sum);
        }

        // Update the maximum difference among all sizes
        maxDiff = Math.max(maxDiff, mx - mn);
    }

    console.log(maxDiff);
}
