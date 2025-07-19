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
    let [a, b, c, d] = input[line++].split(" ").map(Number);
    solve(a, b, c, d);
  }
}

function solve(a, b, c, d) {
  if (d < b) {
    console.log(-1);
    return;
  }
  let ySteps = d - b;
  let xSteps = a + ySteps;

  if (xSteps >= c) {
    let xStepsLeft = xSteps - c;
    console.log(xStepsLeft + ySteps);
  } else {
    console.log(-1);
  }
}
