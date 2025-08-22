const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
});

rl.on("close", () => {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let n = parseInt(input[line++]);
    let b = input[line++].split(" ").map(Number);
    solve(b, n);
  }
}

function solve(b, n) {
  let seen = new Set();
  for (let x of b) {
    if (seen.has(x)) {
      console.log("YES");
      return;
    }
    seen.add(x);
  }
  console.log("NO");
}
