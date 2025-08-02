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
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let number = parseInt(input[line++]);
    let arr = input[line++].split("");
    solve(number, arr);
  }
}

function solve(number, arr) {
  let continuousMaxLength = 1;
  let currentMaxLength = 1;

  let i = 0;
  let j = i + 1;

  while (j < number) {
    if (arr[i] === arr[j]) {
      currentMaxLength++;
    } else {
      continuousMaxLength = Math.max(continuousMaxLength, currentMaxLength);
      currentMaxLength = 1;
      i = j;
    }
    j++;
  }

  console.log(Math.max(continuousMaxLength, currentMaxLength) + 1);
}
