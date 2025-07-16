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

function solve(n, arr) {
  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] % 2 && arr[i + 1] % 2) {
      count++;
    }
    if (arr[i] % 2 === 0 && arr[i + 1] % 2 === 0) {
      count++;
    }
  }

  console.log(count);
}
