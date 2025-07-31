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
    let [a, b] = input[line++].split(" ").map(Number);
    let [kx, ky] = input[line++].split(" ").map(Number);
    let [Qx, Qy] = input[line++].split(" ").map(Number);
    solve(a, b, kx, ky, Qx, Qy);
  }
}

let dx = [1, 1, -1, -1];
let dy = [1, -1, -1, 1];

function solve(a, b, kx, ky, Qx, Qy) {
  let kingPairs = new Set();
  let queenPairs = new Set();
  let count = 0;
  for (let i = 0; i < 4; i++) {
    kingPairs.add(`${kx + dx[i] * a},${ky + dy[i] * b}`);
    kingPairs.add(`${kx + dx[i] * b},${ky + dy[i] * a}`);

    queenPairs.add(`${Qx + dx[i] * a},${Qy + dy[i] * b}`);
    queenPairs.add(`${Qx + dx[i] * b},${Qy + dy[i] * a}`);
  }

  for (let king of kingPairs) {
    if (queenPairs.has(king)) {
      count++;
    }
  }

  console.log(count);
}
