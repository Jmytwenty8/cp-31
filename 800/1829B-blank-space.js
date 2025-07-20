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
    let size = parseInt(input[line++]);
    let array = input[line++].split(" ").map(Number);
    solve(size, array);
  }
}

function solve(size, array) {
  let i = 0;
  let ans = 0;

  while (i < size) {
    if (array[i] === 1) {
      i++;
    } else {
      let j = i;
      while (j < size && array[j] !== 1) {
        j++;
      }
      ans = Math.max(ans, j - i);
      i = j + 1;
    }
  }
  console.log(ans);
}
