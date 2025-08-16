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
  let line = 0;
  let [n, d] = input[line++].split(" ").map(Number);
  let arr = input[line++].split(" ").map(Number);
  solve(n, d, arr);
}
function solve(n, d, arr) {
  arr.sort((a, b) => b - a);
  let i = 0;
  let j = n - 1;
  let count = 0;

  while (i <= j) {
    let max = arr[i];
    let k = 1;
    while (max * k <= d && i < j) {
      k++;
      j--;
    }
    if (max * k > d) {
      count++;
    }
    i++;
  }
  console.log(count);
}
