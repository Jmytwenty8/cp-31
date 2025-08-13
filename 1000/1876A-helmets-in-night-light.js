const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

r1.on("line", (line) => {
  input.push(line);
});

r1.on("close", () => {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 1; i <= testCases; i++) {
    let [n, p] = input[line++].split(" ").map(Number);
    let a = input[line++].split(" ").map(Number);
    let b = input[line++].split(" ").map(Number);
    solve(n, p, a, b);
  }
}

function solve(n, p, a, b) {
  let pairs = [];
  for (let i = 0; i < n; i++) {
    pairs.push([a[i], b[i]]);
  }

  // Sort residents by increasing helmet sharing cost
  pairs.sort((x, y) => x[1] - y[1]);

  let cost = p;
  let remaining = n - 1;

  for (let i = 0; remaining > 0 && i < pairs.length; i++) {
    let [canShare, helmetCost] = pairs[i];
    let toInform = Math.min(remaining, canShare);

    // If helmetCost < p, use the helmet
    // Otherwise, directly inform instead
    if (helmetCost < p) {
      cost += toInform * helmetCost;
      remaining -= toInform;
    } else {
      // Inform each remaining directly since it's cheaper
      cost += remaining * p;
      remaining = 0;
    }
  }

  console.log(cost);
}
