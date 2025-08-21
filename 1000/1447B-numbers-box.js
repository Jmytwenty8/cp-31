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
    let [n, m] = input[line++].split(" ").map(Number);
    let grid = [];
    for (let j = 0; j < n; j++) {
      let arr = input[line++].split(" ").map(Number);
      grid.push(arr);
    }
    solve(grid, n, m);
  }
}

function solve(grid, n, m) {
  let minAbs = Infinity;
  let negatives = 0;
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let value = grid[i][j];
      total += Math.abs(value);
      if (value < 0) {
        negatives++;
      }
      minAbs = Math.min(minAbs, Math.abs(value));
    }
  }

  if (negatives % 2 === 0) {
    console.log(total);
  } else {
    console.log(total - 2 * minAbs);
  }
}
