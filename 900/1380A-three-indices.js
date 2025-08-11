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
    let n = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(n, arr);
  }
}

function solve(n, arr) {
  for (let i = 1; i < n - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      console.log("YES");
      console.log(i, i + 1, i + 2);
      return;
    }
  }
  console.log("NO");
}
