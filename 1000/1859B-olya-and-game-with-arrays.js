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
    let n = parseInt(input[line++]);
    let size = [];
    let arrays = [];
    for (let j = 0; j < n; j++) {
      size.push(parseInt(input[line++]));
      arrays.push(input[line++].split(" ").map(Number));
    }
    solve(arrays);
  }
}

function solve(arrays) {
  let dumpingArray = [];
  let smallestSecondIndex = 0;
  let smallestElement = 1e9;
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].sort((x, y) => x - y);
    if (
      arrays[i][1] &&
      arrays[smallestSecondIndex][1] &&
      arrays[smallestSecondIndex][1] > arrays[i][1]
    ) {
      smallestSecondIndex = i;
    }
    smallestElement = Math.min(smallestElement, arrays[i][0]);
    dumpingArray.push(arrays[i][1]);
  }

  let totalBeauty = dumpingArray.reduce((acc, val) => acc + val, 0);
  totalBeauty -= arrays[smallestSecondIndex][1];
  totalBeauty += smallestElement;
  console.log(totalBeauty);
}
