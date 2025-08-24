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
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 0; i < testCases; i++) {
    let [aStr, bStr] = input[line++].split(" ");
    let a = BigInt(aStr);
    let b = BigInt(bStr);
    solve(a, b);
  }
}
function getConstant(n) {
  while (n % 2n === 0n) {
    n /= 2n;
  }
  return n;
}

function solve(a, b) {
  let operations = 0;
  if (a > b) {
    [a, b] = [b, a];
  }

  let constantA = getConstant(a);
  let constantB = getConstant(b);
  if (constantA !== constantB) {
    console.log(-1);
    return;
  }

  b /= a;

  while (b >= 8n) {
    b /= 8n;
    operations++;
  }

  if (b > 1n) operations++;
  console.log(operations);
}
