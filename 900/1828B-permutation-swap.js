function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}

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
    let size = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(size, arr);
  }
}

function solve(size, arr) {
  let res = 0;
  for (let i = 1; i <= size; i++) {
    res = gcd(res, Math.abs(arr[i - 1] - i));
  }

  console.log(res);
}
