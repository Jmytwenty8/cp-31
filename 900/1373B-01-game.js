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
    let arr = input[line++].split("");
    solve(arr);
  }
}

function solve(arr) {
  const dict = {};
  for (let i = 0; i < arr.length; i++) {
    dict[arr[i]] = (dict[arr[i]] || 0) + 1;
  }

  if (Object.keys(dict).length === 1) {
    console.log("NET");
    return;
  }

  const minVal = Math.min(...Object.values(dict));
  if (minVal % 2) {
    console.log("DA");
    return;
  }
  console.log("NET");
}
