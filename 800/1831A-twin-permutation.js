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
    let size = parseInt(input[line++]);
    let array = input[line++].split(" ").map(Number);
    solve(size, array);
  }
}

function solve(n, array) {
  let ans = array.map((x) => n + 1 - x);
  console.log(ans.join(" "));
}
