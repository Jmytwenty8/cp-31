// Codeforces input/output template for Node.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
});

rl.on("close", function () {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let n = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(n, arr);
  }
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

function solve(n, arr) {
  arr.sort((x, y) => x - y);
  let g = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      g = Math.min(g, gcd(arr[i], arr[j]));
    }
  }

  if (g <= 2) {
    console.log("YES");
    return;
  }
  console.log("NO");
}
