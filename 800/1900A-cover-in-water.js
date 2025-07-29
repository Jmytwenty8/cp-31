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
  for (let i = 0; i < testCases; i++) {
    let [numberOfCovers] = input[i * 2 + 1].split(" ").map(Number);
    let covers = input[i * 2 + 2].split("");
    solve(numberOfCovers, covers);
  }
}

function solve(numberOfCovers, covers) {
  let emptyCount = 0;
  let streak = 0;
  for (let i = 0; i < numberOfCovers; i++) {
    if (streak === 3) {
      emptyCount = 2;
      break;
    }
    if (covers[i] === ".") {
      emptyCount++;
      streak++;
    } else {
      streak = 0;
    }
  }
  if (streak === 3) {
    emptyCount = 2;
  }
  console.log(emptyCount);
}
