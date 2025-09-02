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
    let n = parseInt(input[line++]);
    let a = input[line++].split(" ").map(BigInt);
    solve(a, n);
  }
}

function solve(a, n) {
  // Create array of [value, originalIndex] and sort by value
  let indexedA = a.map((val, idx) => [val, idx]);
  indexedA.sort((x, y) => (x[0] < y[0] ? -1 : x[0] > y[0] ? 1 : 0));

  // Precompute prefix sums for greedy removal
  let prefixSum = new Array(n).fill(BigInt(0));
  for (let i = 0; i < n; i++) {
    prefixSum[i] = indexedA[i][0] + (i > 0 ? prefixSum[i - 1] : BigInt(0));
  }
  let dict = {};
  dict[prefixSum[n - 1]] = n - 1;

  for (let i = indexedA.length - 2; i >= 0; i--) {
    if (prefixSum[i] >= BigInt(indexedA[i + 1][0])) {
      dict[prefixSum[i]] = dict[prefixSum[i + 1]];
    } else {
      dict[prefixSum[i]] = i;
    }
  }

  let indexToSortedPos = new Array(n);
  for (let i = 0; i < n; i++) {
    indexToSortedPos[indexedA[i][1]] = i;
  }

  let res = new Array(n);
  for (let i = 0; i < n; i++) {
    let pos = indexToSortedPos[i];
    res[i] = dict[prefixSum[pos]];
  }
  console.log(res.join(" "));
}
