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

  for (let i = 0; i < testCases; i++) {
    let size = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(size, arr);
  }
}

function solve(size, arr) {
  let count1 = 0n;
  let count0 = 0n;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count1++;
    }

    if (arr[i] === 0) {
      count0++;
    }
  }

  let pow2 = 1n << count0;
  let result = count1 * pow2;
  console.log(result.toString());
}
