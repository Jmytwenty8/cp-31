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
    let s = input[line++].split("");
    solve(n, k, s);
  }
}

function solve(n, k, s) {
  let prefixArrayForWhitesCount = [];
  prefixArrayForWhitesCount[0] = s[0] === "W" ? 1 : 0;
  for (let i = 1; i < n; i++) {
    prefixArrayForWhitesCount[i] =
      prefixArrayForWhitesCount[i - 1] + (s[i] === "W" ? 1 : 0);
  }

  let minWhites = 2 * 1e5;
  for (let i = 0; i <= n - k; i++) {
    let currentWhites;
    if (i === 0) {
      currentWhites = prefixArrayForWhitesCount[k - 1];
    } else {
      currentWhites =
        prefixArrayForWhitesCount[i + k - 1] - prefixArrayForWhitesCount[i - 1];
    }
    minWhites = Math.min(minWhites, currentWhites);
  }

  console.log(minWhites);
}
