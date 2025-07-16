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
    let arr = input[line++].split(" ").map(Number);
    solve(n, arr);
  }
}

function solve(n, arr) {
  let allEqual = arr.every((x) => x === arr[0]);
  if (allEqual) {
    console.log("NO");
    return;
  }
  arr.sort((a, b) => b - a);

  // If first two are equal, swap first and last
  if (arr[0] === arr[1]) {
    [arr[0], arr[n - 1]] = [arr[n - 1], arr[0]];
  }

  // Check if beautiful
  let sum = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === sum) {
      console.log("NO");
      return;
    }
    sum += arr[i];
  }
  console.log("YES");
  console.log(arr.join(" "));
}
