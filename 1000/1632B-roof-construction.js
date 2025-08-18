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
  for (let i = 0; i < testCases; i++) {
    let n = parseInt(input[line++]);
    solve(n);
  }
}

function solve(n) {
  let MSB = Math.floor(Math.log2(n - 1));
  let res = [];
  for (let i = Math.pow(2, MSB) - 1; i >= 0; i--) {
    res.push(i);
  }
  for (let i = Math.pow(2, MSB); i < n; i++) {
    res.push(i);
  }
  console.log(res.join(" "));
}
