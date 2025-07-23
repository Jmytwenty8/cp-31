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
    let array = input[i + 1].split(" ").map(Number);
    solve(array);
  }
}

function solve(array) {
  let annaButtons = array[0];
  let katieButtons = array[1];
  let commonButtons = array[2];

  // If commonButtons is odd, Anna gets one extra button
  if (commonButtons % 2 === 1) annaButtons++;

  if (annaButtons > katieButtons) {
    console.log("First");
  } else {
    console.log("Second");
  }
}
