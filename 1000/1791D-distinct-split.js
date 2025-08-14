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
    let n = parseInt(input[line++]);
    let s = input[line++].split("");
    solve(n, s);
  }
}

// function solve(n, s) {
//   let faSet = new Set();
//   let fbSet = new Set();

//   let i = 0;
//   while (i < n) {
//     if (faSet.has(s[i])) {
//       break;
//     }
//     faSet.add(s[i]);
//     i++;
//   }

//   while (i < n) {
//     fbSet.add(s[i]);
//     i++;
//   }

//   console.log(fbSet.size + faSet.size);
// }

function solve(n, s) {
  // Precompute suffix distinct counts
  let suffix = new Array(n + 1).fill(0);
  let seen = new Set();
  for (let i = n - 1; i >= 0; i--) {
    seen.add(s[i]);
    suffix[i] = seen.size;
  }

  let ans = 0;
  let prefixSet = new Set();
  for (let i = 0; i < n - 1; i++) {
    prefixSet.add(s[i]);
    ans = Math.max(ans, prefixSet.size + suffix[i + 1]);
  }
  console.log(ans);
}
