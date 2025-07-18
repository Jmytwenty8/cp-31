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
    let k = input[line++];
    solve(n, k);
  }
}

function solve(n, k) {
  let i = 0;
  let j = n - 1;
  let size = 0;

  while (
    (i < j && k[i] === "0" && k[j] === "1") ||
    (i < j && k[i] === "1" && k[j] === "0")
  ) {
    size++;
    i++;
    j--;
  }

  console.log(n - 2 * size);
}
