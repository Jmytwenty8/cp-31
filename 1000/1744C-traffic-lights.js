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

  for (let t = 0; t < testCases; t++) {
    let [n, c] = input[line++].split(" ");
    let s = input[line++];
    solve(parseInt(n), c, s);
  }
}

function solve(n, c, s) {
  const doubleS = s + s;
  const nextG = new Array(2 * n).fill(Infinity);
  let gIndex = -1;

  // Compute next 'g' from the right
  for (let i = 2 * n - 1; i >= 0; i--) {
    if (doubleS[i] === "g") {
      gIndex = i;
    }
    if (gIndex !== -1) {
      nextG[i] = gIndex - i;
    }
  }

  let maxTime = 0;

  // Only check the first n characters for occurrences of 'c'
  for (let i = 0; i < n; i++) {
    if (s[i] === c) {
      maxTime = Math.max(maxTime, nextG[i]);
    }
  }

  console.log(maxTime);
}
