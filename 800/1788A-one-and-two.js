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
    let n = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(n, arr);
  }
}

function solve(n, arr) {
  let twoCount = 0;
  let oneCount = 0;
  for (let i of arr) {
    if (i === 2) {
      twoCount++;
    } else if (i === 1) {
      oneCount++;
    }
  }

  if (!twoCount) {
    console.log(1);
    return;
  }

  if (twoCount % 2) {
    console.log(-1);
    return;
  }

  let halfCount = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 2) {
      halfCount++;
      if (halfCount === twoCount / 2) {
        console.log(i + 1);
        return;
      }
    }
  }
}
