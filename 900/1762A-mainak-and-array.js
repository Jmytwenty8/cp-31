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
  for (let t = 0; t < testCases; t++) {
    let size = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(size, arr);
  }
}

function solve(size, arr) {
  let res = 0;

  for (let i = 1; i < size; i++) {
    res = Math.max(res, arr[i] - arr[0]);
  }

  for (let i = 0; i < size - 1; i++) {
    res = Math.max(res, arr[size - 1] - arr[i]);
  }

  for (let i = 0; i < size - 1; i++) {
    res = Math.max(res, arr[i] - arr[i + 1]);
  }

  console.log(res);
}
