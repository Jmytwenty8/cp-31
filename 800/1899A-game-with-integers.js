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
  for (let i = 1; i <= testCases; i++) {
    let number = parseInt(input[i]);
    solve(number);
  }
}

function solve(number) {
  if (number % 3 === 1 || number % 3 === 2) {
    console.log("First");
  } else {
    console.log("Second");
  }
}
