const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r1.on("line", (line) => {
  input.push(line);
});

r1.on("close", () => {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 1; i <= testCases; i++) {
    let [n, x] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);
    solve(n, x, arr);
  }
}

function solve(n, x, arr) {
  // [a+b/x] <= [a/x] + [b/x]
  let sum = arr.reduce((a, b) => a + b, 0);
  let maximumBeauty = arr.reduce((a, b) => a + Math.ceil(b / x), 0);
  console.log(Math.ceil(sum / x), maximumBeauty);
}
