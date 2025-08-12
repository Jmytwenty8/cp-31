const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  main();
});

function main() {
  const testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    const [n, k] = input[line++].split(" ").map(Number);
    const arr = input[line++].split(" ").map(Number);
    solve(n, k, arr);
  }
}

function solve(n, k, arr) {
  let minOp = Infinity;
  let evenCount = 0;

  for (let i of arr) {
    if (i % 2 == 0) {
      evenCount++;
    }
    if (i % k == 0) {
      minOp = 0;
    }
    minOp = Math.min(minOp, k - (i % k));

    if (k === 4) {
      if (evenCount >= 2) {
        minOp = Math.min(minOp, 0);
      }
      if (evenCount == 1) {
        minOp = Math.min(minOp, 1);
      }
      if (evenCount == 0) {
        minOp = Math.min(minOp, 2);
      }
    }
  }
  console.log(minOp);
}
