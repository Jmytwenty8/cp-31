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
    let [a, b] = input[line++].split(" ").map(Number);
    solve(a, b);
  }
}

function xoor(n) {
  switch (n % 4) {
    case 0:
      return n;
    case 1:
      return 1;
    case 2:
      return n + 1;
    case 3:
      return 0;
  }
}

function solve(a, b) {
  let xorTillAminus1 = xoor(a - 1);
  let x = xorTillAminus1 ^ b;

  if (xorTillAminus1 === b) {
    console.log(a);
  } else if (x !== a) {
    console.log(a + 1);
  } else {
    console.log(a + 2);
  }
}
