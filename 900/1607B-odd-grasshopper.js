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
    let [x, n] = input[line++].split(" ").map(BigInt);
    solve(x, n);
  }
}

function solve(x, n) {
  if (n % 4n === 1n) {
    n = -n;
  } else if (n % 4n === 2n) {
    n = 1n;
  } else if (n % 4n === 3n) {
    n = n + 1n;
  } else {
    n = 0n;
  }

  if (x % 2n) {
    console.log((x - n).toString());
  } else {
    console.log((x + n).toString());
  }
}
