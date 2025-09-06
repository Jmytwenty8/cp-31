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
        let [n, k, a, b] = input[line++].split(" ").map(Number);
        let cords = [];
        for (let j = 0; j < n; j++) {
            let [x, y] = input[line++].split(" ").map(Number);
            cords.push([x, y]);
        }
        solve(n, k, a, b, cords);
    }
}

function solve(n, k, a, b, cords) {
    const directDist = Math.abs(cords[b - 1][0] - cords[a - 1][0]) + Math.abs(cords[b - 1][1] - cords[a - 1][1]);

    // Check if both a and b are major cities (first k cities)
    if (a <= k && b <= k) {
        console.log(0);
        return;
    }

    if (k === 0) {
        console.log(directDist);
        return;
    }

    let minToMajorFromStart = Infinity;
    let minToMajorFromEnd = Infinity;

    for (let i = 0; i < k; i++) {
        const major = cords[i];
        const start = cords[a - 1];
        const end = cords[b - 1];

        minToMajorFromStart = Math.min(minToMajorFromStart, Math.abs(major[0] - start[0]) + Math.abs(major[1] - start[1]));
        minToMajorFromEnd = Math.min(minToMajorFromEnd, Math.abs(major[0] - end[0]) + Math.abs(major[1] - end[1]));
    }

    const viaMajorCost = minToMajorFromStart + minToMajorFromEnd;

    console.log(Math.min(directDist, viaMajorCost));
}