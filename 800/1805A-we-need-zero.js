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
    let array = input[line++].split(" ").map(Number);
    solve(n, array);
  }
}

function solve(n, array) {
  let xor = 0;
  for (let a of array) {
    xor ^= a;
  }

  if (n % 2) {
    console.log(xor);
  } else {
    if (xor === 0) {
      console.log(0);
    } else {
      console.log(-1);
    }
  }
}
