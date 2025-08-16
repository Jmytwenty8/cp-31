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
    let [n, k, b, s] = input[line++].split(" ").map(Number);
    solve(n, k, b, s);
  }
}
function solve(n, k, b, s) {
  // Check if possible
  if (s < b * k || s > b * k + n * (k - 1)) {
    console.log(-1);
    return;
  }
  let res = Array(n).fill(0);
  res[0] = b * k;
  let rem = s - res[0];
  for (let i = 0; i < n && rem > 0; i++) {
    let add = Math.min(rem, k - 1);
    res[i] += add;
    rem -= add;
  }
  console.log(res.join(" "));
}
