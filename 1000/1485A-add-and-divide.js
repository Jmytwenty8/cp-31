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
  // Process the input array here
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let [a, b] = input[line++].split(" ").map(Number);
    console.log(solve(a, b));
  }
}

// log(2, 10^9) === 29.something ~= 30

function solve(a, b) {
  let operations = 1e9;

  for (let i = 0; i <= 30; i++) {
    let bNew = b + i;

    if (bNew === 1) continue;

    let divisions = 0;
    let aNew = a;

    while (aNew > 0) {
      aNew = Math.floor(aNew / bNew);
      divisions++;
    }

    operations = Math.min(operations, i + divisions);
  }
  return operations;
}
