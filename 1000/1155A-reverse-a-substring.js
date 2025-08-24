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
  // Process the input array here
  main();
});

function main() {
  let size = parseInt(input[0]);
  let s = String(input[1]).trim();
  solve(size, s);
}

// function solve(size, s) {
//   let increased = s.split("").sort().join("");
//   let breakPoint = -1;
//   if (increased === s) {
//     console.log("NO");
//     return;
//   }
//   console.log("YES");
//   for (let i = 0; i < size; i++) {
//     if (s[i] !== increased[i]) {
//       continue;
//     } else {
//       breakPoint = i;
//       break;
//     }
//   }
//   console.log(breakPoint + 1, breakPoint + 2);
// }

function solve(size, s) {
  for (let i = 0; i < size - 1; i++) {
    if (s[i] > s[i + 1]) {
      console.log("YES");
      console.log(i + 1, i + 2);
      return;
    }
  }
  console.log("NO");
}
