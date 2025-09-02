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
    let size = parseInt(input[line++]);
    let s = input[line++].split("");
    solve(size, s);
  }
}

function solve(size, s) {
  let dict = {};
  let prefix = [];
  for (let i = 0; i < size; i++) {
    if (dict[s[i]]) {
      dict[s[i]] = dict[s[i - 1]];
    } else {
      dict[s[i]] = (dict[s[i - 1]] || 0) + 1;
    }
    prefix[i] = dict[s[i]];
  }

  let total = 0;
  for (let i = 1; i < size; i++) {
    total += prefix[size - i - 1];
  }

  console.log(total + prefix[size - 1]);
}
