const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
});
rl.on("close", function () {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let [n, a, b] = input[line++].split(" ").map(Number);
    solve(n, a, b);
  }
}

function solve(n, a, b) {
  if (a + b + 2 <= n) {
    console.log("YES");
  } else if (a === b && a === n) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
