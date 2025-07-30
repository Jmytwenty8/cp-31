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
    let [numberOfBoxes, k] = input[i * 2 + 1].split(" ").map(Number);
    let boxes = input[i * 2 + 2].split(" ").map(Number);
    halloumiBoxes(numberOfBoxes, k, boxes);
  }
}
function halloumiBoxes(numberOfBoxes, k, boxes) {
  if (numberOfBoxes === k) {
    console.log("YES");
    return;
  }

  if (k === 1 && numberOfBoxes > 1) {
    for (let i = 1; i < numberOfBoxes; i++) {
      if (boxes[i] < boxes[i - 1]) {
        console.log("NO");
        return;
      }
    }
    console.log("YES");
    return;
  }

  console.log("YES");
}
