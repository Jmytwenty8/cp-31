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
  for (let t = 0; t < testCases; t++) {
    let [n, k] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);
    solve(n, k, arr);
  }
}

function solve(n, k, arr) {
  arr.sort((a, b) => a - b);
  let balancedCount = 1;
  let currentBalancedCount = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] - arr[i - 1] <= k) {
      currentBalancedCount++;
    } else {
      balancedCount = Math.max(balancedCount, currentBalancedCount);
      currentBalancedCount = 1;
    }
  }

  balancedCount = Math.max(balancedCount, currentBalancedCount);

  console.log(n - balancedCount);
}
