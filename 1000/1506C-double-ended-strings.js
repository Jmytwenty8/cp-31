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
    let a = input[line++].trim();
    let b = input[line++].trim();
    console.log(solve(a, b));
  }
}

// function solve(a, b) {
//   let maxCommonLength = 0;

//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j < a.length; j++) {
//       let subA = a.slice(i, j + 1);
//       if (b.includes(subA)) {
//         maxCommonLength = Math.max(maxCommonLength, subA.length);
//       }
//     }
//   }

//   return a.length + b.length - 2 * maxCommonLength;
// }

// function solve(a, b, memo = new Map()) {
//   const key = a + "|" + b;
//   if (memo.has(key)) return memo.get(key);

//   if (a === b) return 0;
//   if (a.length === 0 || b.length === 0) return a.length + b.length;

//   const res =
//     Math.min(
//       solve(a.slice(1), b, memo), // delete front of a
//       solve(a.slice(0, -1), b, memo), // delete back of a
//       solve(a, b.slice(1), memo), // delete front of b
//       solve(a, b.slice(0, -1), memo) // delete back of b
//     ) + 1;

//   memo.set(key, res);
//   return res;
// }

function solve(a, b, memo = new Map()) {
  const key = a + "|" + b;

  if (memo.has(key)) return memo.get(key);
  if (a === b) return 0;
  if (a.length === 0 || b.length === 0) return a.length + b.length;

  let minOps = Infinity;

  // Instead of calculating all 4 every time, short-circuit when possible
  if (a.length > 0) {
    minOps = Math.min(minOps, solve(a.slice(1), b, memo) + 1); // delete front of a
    minOps = Math.min(minOps, solve(a.slice(0, -1), b, memo) + 1); // delete back of a
  }

  if (b.length > 0) {
    minOps = Math.min(minOps, solve(a, b.slice(1), memo) + 1); // delete front of b
    minOps = Math.min(minOps, solve(a, b.slice(0, -1), memo) + 1); // delete back of b
  }

  memo.set(key, minOps);
  return minOps;
}
