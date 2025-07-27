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
    let [n, m] = input[i * 3 + 1].split(" ").map(Number);
    let x = input[i * 3 + 2];
    let s = input[i * 3 + 3];
    solve(x, s);
  }
}

function solve(x, s) {
  let count = 0;
  let newX = x;
  for (let i = 0; i <= 5; i++) {
    if (newX.includes(s)) {
      console.log(count);
      return;
    }

    count++;
    newX += newX;
  }

  console.log(-1);
}
