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
    let n = input[line++].split("").map(Number);
    let array = input[line++].split(" ").map(Number);
    solve(array);
  }
}

function solve(array) {
  let negativeCount = array.filter((x) => x < 0).length;
  let positiveCount = array.length - negativeCount;
  let op = 0;

  while (
    (negativeCount > positiveCount || negativeCount % 2 === 1) &&
    negativeCount > 0
  ) {
    negativeCount--;
    positiveCount++;
    op++;
  }

  console.log(op);
}
