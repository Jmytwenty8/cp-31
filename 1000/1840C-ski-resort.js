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
  for (let i = 1; i <= testCases; i++) {
    let [n, k, q] = input[line++].split(" ").map(Number);
    let temps = input[line++].split(" ").map(Number);
    solve(n, k, q, temps);
  }
}

function solve(n, k, q, temps) {
  let possibleVacations = 0;

  let i = 0;
  let j = 0;
  while (i < n) {
    if (temps[i] > q) {
      i++;
      continue;
    }
    let j = i;
    while (j < n && temps[j] <= q) j++;
    let len = j - i;
    if (len >= k) {
      possibleVacations += ((len - k + 1) * (len - k + 2)) / 2;
    }
    i = j + 1;
  }

  console.log(possibleVacations);
}
