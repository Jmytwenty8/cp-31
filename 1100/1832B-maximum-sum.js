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
        let [n, k] = input[line++].trim().split(' ').map(Number);
        let a = input[line++].trim().split(' ').map(Number);
        solve(n, k, a);
    }
}

function solve(n, k, a) {
    a.sort((x, y) => x - y);

    // Build prefix sum array with 1-based indexing
    let prefixSum = Array(n + 1).fill(0n);
    for (let i = 0; i < n; i++) {
        prefixSum[i + 1] = prefixSum[i] + BigInt(a[i]);
    }

    let totalSum = prefixSum[n];
    let maxRemaining = 0n;

    // Try all i = 0..k pair-removals
    for (let i = 0; i <= k; i++) {
        let pairRemove = 2 * i;
        let singleRemove = k - i;

        if (pairRemove > n || singleRemove > n - pairRemove) continue;

        let removedSmallest = prefixSum[pairRemove];
        let removedLargest = prefixSum[n] - prefixSum[n - singleRemove];
        let removedTotal = removedSmallest + removedLargest;
        let remaining = totalSum - removedTotal;

        if (remaining > maxRemaining) {
            maxRemaining = remaining;
        }
    }

    console.log(maxRemaining.toString());
}
