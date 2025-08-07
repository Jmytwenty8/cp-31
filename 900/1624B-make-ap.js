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
    let [a, b, c] = input[line++].split(" ").map(Number);
    solve(a, b, c);
  }
}

function solve(a, b, c) {
  if (
    (2 * b - c > 0 && (2 * b - c) % a === 0) ||
    ((a + c) % 2 === 0 && (a + c) / 2 > 0 && ((a + c) / 2) % b === 0) ||
    (2 * b - a > 0 && (2 * b - a) % c === 0)
  ) {
    console.log("YES");
    return;
  }

  console.log("NO");
}
