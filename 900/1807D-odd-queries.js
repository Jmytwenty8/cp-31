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
  for (let t = 0; t < testCases; t++) {
    let [n, q] = input[line++].split(" ").map(Number);
    let arr = input[line++].split(" ").map(Number);

    // Precompute prefix sum once for this test case
    let prefixSum = new Array(n);
    prefixSum[0] = arr[0];
    for (let i = 1; i < n; i++) {
      prefixSum[i] = prefixSum[i - 1] + arr[i];
    }

    for (let i = 0; i < q; i++) {
      let [l, r, k] = input[line++].split(" ").map(Number);
      solve(n, prefixSum, l, r, k);
    }
  }
}

function solve(n, prefixSum, l, r, k) {
  let originalSum = prefixSum[n - 1];
  let leftSum = l > 1 ? prefixSum[l - 2] : 0;
  let rightSum = prefixSum[r - 1];
  let segmentSum = rightSum - leftSum;
  let replacingSum = k * (r - l + 1);
  let newSum = originalSum - segmentSum + replacingSum;
  if (newSum % 2 === 1) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
