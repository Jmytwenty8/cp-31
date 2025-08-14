const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r1.on("line", (line) => {
  input.push(line);
});

r1.on("close", () => {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 1; i <= testCases; i++) {
    let n = parseInt(input[line++]);
    let a = input[line++].split(" ").map(Number);
    let b = input[line++].split(" ").map(Number);
    solve(n, a, b);
  }
}

function solve(n, a, b) {
  let freqA = new Map();
  let freqB = new Map();

  // Count max consecutive frequencies in array a
  let i = 0;
  while (i < n) {
    let j = i;
    while (j < n && a[j] === a[i]) {
      j++;
    }
    let count = j - i;
    freqA.set(a[i], Math.max(freqA.get(a[i]) || 0, count));
    i = j;
  }

  // Count max consecutive frequencies in array b
  i = 0;
  while (i < n) {
    let j = i;
    while (j < n && b[j] === b[i]) {
      j++;
    }
    let count = j - i;
    freqB.set(b[i], Math.max(freqB.get(b[i]) || 0, count));
    i = j;
  }

  // Find max streak combining both arrays
  let maxFreq = 0;
  let keys = new Set([...freqA.keys(), ...freqB.keys()]);

  for (let key of keys) {
    let countA = freqA.get(key) || 0;
    let countB = freqB.get(key) || 0;
    maxFreq = Math.max(maxFreq, countA + countB);
  }

  console.log(maxFreq);
}
