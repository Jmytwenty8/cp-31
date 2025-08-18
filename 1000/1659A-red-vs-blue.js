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
    let [n, r, b] = input[line++].split(" ").map(Number);
    solve(n, r, b);
  }
}

function solve(n, r, b) {
  let lengthOfR = Math.floor(r / (b + 1));
  let extraRed = Math.floor(r % (b + 1));
  let result = "";
  for (let i = 1; i <= b + 1; i++) {
    for (let j = 0; j < lengthOfR; j++) {
      result += "R";
    }
    if (extraRed > 0) {
      result += "R";
      extraRed--;
    }
    if (i != b + 1) {
      result += "B";
    }
  }
  console.log(result);
}
