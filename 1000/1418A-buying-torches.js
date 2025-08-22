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
  // Process the input array here
  main(input);
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 1; i <= testCases; i++) {
    let [x, y, k] = input[line++].split(" ").map(Number);
    solve(x, y, k);
  }
}

function solve(x, y, k) {
  x = BigInt(x);
  y = BigInt(y);
  k = BigInt(k);

  let totalSticksRequired = k * y + k - 1n;
  // Ceiling division for BigInt: (a + b - 1) / b
  let type1Operations = (totalSticksRequired + (x - 1n) - 1n) / (x - 1n);
  let type2Operations = k;
  console.log((type1Operations + type2Operations).toString());
}
