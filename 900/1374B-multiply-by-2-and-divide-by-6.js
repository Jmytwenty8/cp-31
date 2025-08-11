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
    let n = parseInt(input[line++]);
    solve(n);
  }
}

function solve(n) {
  if (n === 1) {
    console.log(0);
    return;
  }
  let count2 = 0;
  let count3 = 0;

  while (n % 2 === 0) {
    n /= 2;
    count2++;
  }

  while (n % 3 === 0) {
    n /= 3;
    count3++;
  }

  if (count2 > count3) {
    console.log(-1);
    return;
  }

  if (n > 1) {
    console.log(-1);
    return;
  }

  console.log(count3 - count2 + count3);
}
