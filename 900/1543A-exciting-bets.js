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
  main();
});

function main() {
  let testcases = parseInt(input[0]);
  for (let i = 1; i <= testcases; i++) {
    let [n, m] = input[i].split(" ").map(BigInt);
    solve(n, m);
  }
}

function solve(n, m) {
  let absDiff = n > m ? n - m : m - n;
  if (absDiff === 0n) {
    console.log("0 0");
  } else {
    let mod = n % absDiff;
    let minMoves = mod < absDiff - mod ? mod : absDiff - mod;
    console.log(absDiff.toString(), minMoves.toString());
  }
}
