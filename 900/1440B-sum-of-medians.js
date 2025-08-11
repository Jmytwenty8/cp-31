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
    let [n, k] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);
    solve(n, k, arr);
  }
}

function solve(n, k, arr) {
  let medianSum = 0;
  let pointer = n * k;
  while (k--) {
    if (pointer < 0) {
    }
    pointer -= Math.floor(n / 2) + 1;
    if (pointer < 0) break;
    medianSum += arr[pointer];
  }
  console.log(medianSum);
}
