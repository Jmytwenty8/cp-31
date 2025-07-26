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
    let [n, k] = input[i * 2 + 1].split(" ").map(Number);
    let array = input[i * 2 + 2].split(" ").map(Number);
    solve(n, k, array);
  }
}

function solve(n, k, array) {
  let ans = "No";

  for (let i of array) {
    if (i === k) {
      ans = "Yes";
      break;
    }
  }
  console.log(ans);
}
