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
    let n = input[line++];
    solve(n);
  }
}

const divisibleBy25 = ["00", "25", "50", "75"];

function solve(n) {
  let count = 1e18;
  for (let pair of divisibleBy25) {
    let last = pair[1],
      secondLast = pair[0];
    let j = n.length - 1;
    // Find last digit
    while (j >= 0 && n[j] !== last) j--;
    if (j < 0) continue;
    // Find second last digit before j
    let k = j - 1;
    while (k >= 0 && n[k] !== secondLast) k--;
    if (k < 0) continue;
    // Digits to remove = (n.length - 1 - j) + (j - 1 - k)
    let currCount = n.length - 1 - j + (j - 1 - k);
    count = Math.min(count, currCount);
  }
  console.log(count === 1e18 ? -1 : count);
}
