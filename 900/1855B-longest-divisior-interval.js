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
  for (let t = 0; t < testCases; t++) {
    let number = BigInt(input[line++]);
    solve(number);
  }
}

function solve(number) {
  let i = 1n;

  while (number % i === 0n) {
    i++;
  }

  console.log((i - 1n).toString());
}
