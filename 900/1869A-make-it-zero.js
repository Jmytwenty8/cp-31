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
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let _size = parseInt(input[line++]);
    let array = input[line++].split(" ").map(Number);
    solve(array);
  }
}

function solve(array) {
  if (array.length % 2) {
    console.log(4);
    console.log(1, array.length - 1);
    console.log(1, array.length - 1);
    console.log(array.length - 1, array.length);
    console.log(array.length - 1, array.length);
    return;
  }

  console.log(2);
  console.log(1, array.length);
  console.log(1, array.length);
}
