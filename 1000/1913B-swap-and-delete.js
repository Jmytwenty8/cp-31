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
    let n = input[line++].split("");
    solve(n);
  }
}

function solve(s) {
  let cnt0 = 0,
    cnt1 = 0;

  // Count the number of 0s and 1s
  for (let c of s) {
    if (c === "0") cnt0++;
    else cnt1++;
  }

  let tLength = 0;

  // Build the longest possible t
  for (let c of s) {
    if (c === "0" && cnt1 > 0) {
      cnt1--;
      tLength++;
    } else if (c === "1" && cnt0 > 0) {
      cnt0--;
      tLength++;
    } else {
      break;
    }
  }

  // Calculate the cost
  const cost = s.length - tLength;
  console.log(cost);
}
