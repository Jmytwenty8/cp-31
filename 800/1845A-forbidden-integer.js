// Codeforces input/output template for Node.js
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
    let [n, k, x] = input[line++].split(" ").map(Number);
    solve(n, k, x);
  }
}

function solve(n, k, x) {
  if (x !== 1) {
    console.log("YES");
    console.log(n);
    console.log(Array(n).fill(1).join(" "));
    return;
  }

  if (k === 1) {
    console.log("NO");
    return;
  }

  if (n % 2 === 0) {
    console.log("YES");
    console.log(n / 2);
    console.log(
      Array(n / 2)
        .fill(2)
        .join(" ")
    );
    return;
  }

  if (k >= 3) {
    // Use one 3 and the rest 2s
    let count2 = (n - 3) / 2;
    console.log("YES");
    console.log(count2 + 1);
    console.log("3 " + Array(count2).fill(2).join(" "));
    return;
  }

  console.log("NO");
}
