const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let size = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(size, arr);
  }
}

function solve(size, arr) {
  // Count frequency of each element
  let freq = new Map();
  for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  let maxFreq = Math.max(...freq.values());
  let ops = 0;
  let curr = maxFreq;
  while (curr < size) {
    ops++; // clone operation
    let add = Math.min(curr, size - curr);
    curr += add;
    ops += add; // swap operations
  }
  console.log(ops);
}
