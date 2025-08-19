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
  // Finalize input processing here
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;

  for (let i = 0; i < testCases; i++) {
    let n = parseInt(input[line++]);
    let a = input[line++].split(" ").map(Number);
    solve(n, a);
  }
}

function solve(n, a) {
  let buildingCords = [];
  let aClone = [...a];
  let aMap = new Map();
  for (let i = 0; i < a.length; i++) {
    if (!aMap.has(a[i])) aMap.set(a[i], []);
    aMap.get(a[i]).push(i);
  }
  let i = 1;
  for (; i <= n / 2; i++) {
    buildingCords.push(-i);
    buildingCords.push(i);
  }
  if (n % 2) {
    buildingCords.push(-i);
  }
  aClone.sort((x, y) => y - x);

  let res = Array(n + 1).fill(0);
  for (let i = 0; i < aClone.length; i++) {
    let indexArr = aMap.get(aClone[i]);
    let index = indexArr.pop();
    res[index + 1] = buildingCords[i];
  }
  let timeSpent = 0;
  for (let i = 0; i < a.length; i++) {
    timeSpent += 2 * Math.abs(res[0] - res[i + 1]) * a[i];
  }
  console.log(timeSpent);
  console.log(res.join(" "));
}
