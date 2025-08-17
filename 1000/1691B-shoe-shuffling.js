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
    let n = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(n, arr);
  }
}

function solve(n, arr) {
  // Your solution logic here
  let sizeMap = new Map();
  for (let i = 0; i < n; i++) {
    if (!sizeMap.has(arr[i])) sizeMap.set(arr[i], []);
    sizeMap.get(arr[i]).push(i);
  }

  let shufflePermutation = [];
  let flag = false;
  for (let [key, value] of sizeMap) {
    if (value.length === 1) {
      flag = true;
      break;
    } else {
      shufflePermutation.push(value[value.length - 1] + 1);
      for (let j = 0; j < value.length - 1; j++) {
        shufflePermutation.push(value[j] + 1);
      }
    }
  }
  if (flag) {
    console.log(-1);
  } else {
    console.log(shufflePermutation.join(" "));
  }
}
