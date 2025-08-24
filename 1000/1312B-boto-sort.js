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
  // Process the input array here
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let n = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(n, arr);
  }
}

function solve(n, arr) {
  console.log(arr.sort((a, b) => b - a).join(" "));
}
