const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

input = [];

rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  main();
});

function main() {
  const testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let size = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(size, arr);
  }
}

function solve(size, arr) {
  let ans = 0;
  for (let i = size - 2; i >= 0; i--) {
    while (arr[i] >= arr[i + 1] && arr[i] > 0) {
      arr[i] = Math.floor(arr[i] / 2);
      ans++;
    }

    if (arr[i] === arr[i + 1]) {
      console.log(-1);
      return;
    }
  }
  console.log(ans);
}
