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
    let [n, k] = input[line++].split(" ").map(Number);
    let a = input[line++].split(" ").map(Number);
    let b = input[line++].split(" ").map(Number);
    solve(n, k, a, b);
  }
}

function solve(n, k, a, b) {
  // To maximize XP, try unlocking the first m quests (1 <= m <= min(n, k))
  // For each m, use m moves to unlock quests 1..m (first time, get a[i])
  // Use remaining k-m moves to repeat the best unlocked quest (max b[0..m-1])
  let prefixSumA = new Array(n + 1).fill(0);
  let prefixMaxB = new Array(n + 1).fill(0);

  for (let i = 1; i <= n; i++) {
    prefixSumA[i] = prefixSumA[i - 1] + a[i - 1];
    prefixMaxB[i] = Math.max(prefixMaxB[i - 1], b[i - 1]);
  }

  let maxXP = 0;
  for (let m = 1; m <= Math.min(n, k); m++) {
    // Unlock first m quests
    let unlockXP = prefixSumA[m];
    // Best repeat XP among unlocked quests
    let repeatXP = (k - m) * prefixMaxB[m];
    let totalXP = unlockXP + repeatXP;
    if (totalXP > maxXP) maxXP = totalXP;
  }

  console.log(maxXP);
}
