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
    let n = input[line++];
    solve(n);
  }
}

function getUntil(n) {
  let num = Number(n);
  if (num < 10) return num;
  let digits = n.length;
  let firstDigit = Number(n[0]);
  return (digits - 1) * 9 + firstDigit;
}

function solve(n) {
  console.log(getUntil(n));
}
