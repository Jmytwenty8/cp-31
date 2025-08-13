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
  let pairs = [];

  for (let i = 0; i < n; i++) {
    pairs.push([i + 1, arr[i] % k === 0 ? k : arr[i] % k]);
  }

  pairs.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return b[1] - a[1];
  });

  console.log(pairs.map((pair) => pair[0]).join(" "));
}
