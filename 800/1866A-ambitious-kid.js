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
  let n = parseInt(input[0]);
  let array = input[1].split(" ").map(Number);
  solve(n, array);
}

function solve(n, array) {
  let ans = Infinity;

  for (let i = 0; i < n; i++) {
    if (array[i] === 0) {
      ans = 0;
      break;
    }
    ans = Math.min(ans, Math.abs(array[i]));
  }

  console.log(ans);
}
