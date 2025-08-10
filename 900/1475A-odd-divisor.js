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
  while (n % 2 === 0) {
    n /= 2;
  }
  if (n === 1) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
