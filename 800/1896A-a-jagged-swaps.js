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
    let size = input[i * 2 + 1].split("").map(Number);
    let array = input[i * 2 + 2].split(" ").map(Number);
    solve(size, array);
  }
}

function solve(size, array) {
  if (array[0] !== 1) {
    console.log("NO");
    return;
  }
  let dict = {};
  for (let i = 0; i < size; i++) {
    if (array[i] in dict) {
      console.log("NO");
      return;
    } else {
      dict[array[i]] = 1;
    }
  }

  console.log("YES");
}
