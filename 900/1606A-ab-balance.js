const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let s = input[line++];
    solve(s);
  }
}

function solve(s) {
  // If the string has only one character, it's already balanced
  if (s.length === 1) {
    console.log(s);
    return;
  }
  // If the first and last characters are the same, just print s
  if (s[0] === s[s.length - 1]) {
    console.log(s);
    return;
  }
  // Otherwise, change the first character to match the last
  let arr = s.split("");
  arr[0] = arr[s.length - 1];
  console.log(arr.join(""));
}
