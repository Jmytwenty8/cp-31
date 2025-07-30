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
    let [n, k, x] = input[line++].split(" ").map(Number);
    solve(n, k, x);
  }
}

function solve(n, k, x) {
  let minimumSum = (k * (k + 1)) / 2;
  let maximumSum = (n * (n + 1)) / 2 - ((n - k) * (n - k + 1)) / 2;

  if (x >= minimumSum && x <= maximumSum) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
