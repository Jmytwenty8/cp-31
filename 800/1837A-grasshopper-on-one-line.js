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
    let [n, k] = input[line++].split(" ").map(Number);
    solve(n, k);
  }
}

function solve(n, k) {
  if (n % k === 0) {
    console.log(2);
    console.log(n - 1, 1);
  } else {
    console.log(1);
    console.log(n);
  }
}
