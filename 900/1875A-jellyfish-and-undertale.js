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
  const testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let [a, b, n] = input[line++].split(" ").map(Number);
    let array = input[line++].split(" ").map(Number);
    solve(a, b, n, array);
  }
}

function solve(a, b, n, array) {
  let currentTimer = 1;
  let result = b - 1;

  array.sort((x, y) => x - y);

  for (let i = 0; i < n; i++) {
    currentTimer = Math.min(currentTimer + array[i], a);

    if (currentTimer < a) {
      result += currentTimer - 1;
      currentTimer = 1;
    }

    if (currentTimer === a) {
      result += a - 1;
      currentTimer = 1;
    }
  }

  console.log(result + 1);
}
