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
    let n = input[i * 2 + 1];
    let array = input[i * 2 + 2].split(" ").map(Number);
    solve(n, array);
  }
}

function solve(n, array) {
  array.sort((a, b) => a - b);
  if (array[0] === array[n - 1]) {
    console.log(-1);
    return;
  }
  let b = [];
  let c = [];
  c.push(array[n - 1]);
  let i = n - 2;

  while (array[i] === array[n - 1]) {
    c.push(array[i]);
    i--;
  }

  for (let j = 0; j <= i; j++) {
    b.push(array[j]);
  }

  console.log(b.length, c.length);
  console.log(b.join(" "));
  console.log(c.join(" "));
}
