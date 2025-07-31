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
    let [n, k] = input[line++].split(" ").map(Number);
    let s = input[line++];
    solve(n, k, s);
  }
}

function solve(n, k, s) {
  let countMap = new Map();
  let oddCount = 0;
  for (let i = 0; i < n; i++) {
    let char = s[i];
    if (countMap.has(char)) {
      countMap.set(char, countMap.get(char) + 1);
    } else {
      countMap.set(char, 1);
    }
  }

  for (let count of countMap.values()) {
    if (count % 2 === 1) {
      oddCount++;
    }
  }

  if (oddCount > k + 1) {
    console.log("NO");
  } else {
    console.log("YES");
  }
}
