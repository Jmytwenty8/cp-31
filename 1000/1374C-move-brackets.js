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
    let s = input[line++];
    solve(s, n);
  }
}

// function solve(s, n) {
//   let pairFound = 0;
//   for (let i = 0; i < n; i++) {
//     while (s[i] !== "(") i++;
//     let j = i + 1;
//     while (j < n && s[j] !== ")") j++;
//     if (j < n) {
//       pairFound++;
//       i = j;
//     }
//   }
//   console.log(n - pairFound);
// }

function solve(s, n) {
  let balance = 0;
  let moves = 0;
  for (let i = 0; i < n; i++) {
    if (s[i] === "(") {
      balance++;
    } else {
      if (balance > 0) {
        balance--;
      } else {
        moves++;
      }
    }
  }
  console.log(moves);
}
