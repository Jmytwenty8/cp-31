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
    let [numberOfGasStations, x] = input[i * 2 + 1].split(" ").map(Number);
    let gasStations = input[i * 2 + 2].split(" ").map(Number);
    solve(numberOfGasStations, x, [0, ...gasStations, x]);
  }
}

function solve(numberOfGasStations, x, gasStations) {
  let max = 0;
  for (let i = 1; i <= numberOfGasStations; i++) {
    let fuelUsed = gasStations[i] - gasStations[i - 1];
    max = Math.max(max, fuelUsed);
  }

  max = Math.max(
    max,
    2 *
      Number(
        gasStations[gasStations.length - 1] -
          gasStations[gasStations.length - 2]
      )
  );
  console.log(max);
}
