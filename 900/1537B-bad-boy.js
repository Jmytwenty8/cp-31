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
  let testcases = parseInt(input[0]);
  let line = 1;
  for (let i = 1; i <= testcases; i++) {
    let [n, m, x, y] = input[line++].split(" ").map(Number);
    solve(n, m, x, y);
  }
}

function solve(n, m, x, y) {
  console.log(1, 1, n, m);
}
