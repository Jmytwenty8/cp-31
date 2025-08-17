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
    let [n, x] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);
    solve(n, x, arr);
  }
}

function solve(n, x, arr) {
  const dict = {};
  for (let i = 0; i < n; i++) {
    dict[i] = { min: arr[i] - x, max: arr[i] + x };
  }

  let changeCount = 0;

  let l = dict[0].min;
  let r = dict[0].max;
  for (let i = 1; i < n; i++) {
    l = Math.max(l, dict[i].min);
    r = Math.min(r, dict[i].max);
    if (l > r) {
      changeCount++;
      l = dict[i].min;
      r = dict[i].max;
    }
  }
  console.log(changeCount);
}
