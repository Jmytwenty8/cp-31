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
    let [n, k] = input[line++].split(" ").map(BigInt);
    solve(n, k);
  }
}

function solve(n, k) {
  if (n % 2n === 0n) {
    console.log("YES");
  } else {
    if (k % 2n) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
