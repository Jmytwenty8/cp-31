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
    let [n] = input[i * 2 + 1].split(" ").map(Number);
    let array = input[i * 2 + 2].split(" ").map(Number);
    solve(n, array);
  }
}

function solve(n, array) {
  let dict = {};
  for (let i of array) {
    dict[i] = (dict[i] || 0) + 1;
  }

  if (Object.keys(dict).length >= 3) {
    console.log("NO");
    return;
  }

  if (Object.keys(dict).length === 1) {
    console.log("YES");
    return;
  }

  const [value1, value2] = Object.keys(dict).map(Number);

  dict[value1] === dict[value2]
    ? console.log("YES")
    : Math.abs(dict[value1] - dict[value2]) === 1
    ? console.log("YES")
    : console.log("NO");
}
