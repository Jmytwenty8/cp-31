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
  for (let i = 0; i < testCases; i++) {
    let n = input[i * 2 + 1];
    let array = input[i * 2 + 2].split(" ").map(Number);
    solve(n, array);
  }
}

function solve(n, array) {
    let sum = 0;
    for (let i of array) {
        sum += i;
    }
    console.log(0 - sum);
}