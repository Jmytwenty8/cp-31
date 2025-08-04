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
    let size = parseInt(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    solve(size, arr);
  }
}

function solve(size, arr) {
  let contiguousCount = 0;
  let i = 0;

  while (i < size) {
    // Find a segment of non-zero numbers
    if (arr[i] !== 0) {
      contiguousCount++;
      while (i < size && arr[i] !== 0) {
        i++;
      }
    } else {
      i++;
    }
  }

  if (contiguousCount === 0) {
    console.log(0);
  } else if (contiguousCount === 1) {
    console.log(1);
  } else {
    console.log(2);
  }
}
