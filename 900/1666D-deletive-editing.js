const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", (line) => {
  input.push(line.trim());
});

rl.on("close", () => {
  main();
});

function main() {
  const testCases = parseInt(input[0]);
  let line = 1;
  for (let t = 0; t < testCases; t++) {
    let [s, t] = input[line++].split(" ");
    solve(s, t);
  }
}

function solve(s, t) {
  let tMap = new Map();

  for (let char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  let sArr = s.split("");
  let i = s.length - 1;

  while (i >= 0) {
    if (tMap.has(sArr[i]) && tMap.get(sArr[i]) > 0) {
      tMap.set(sArr[i], tMap.get(sArr[i]) - 1);
      i--;
    } else {
      sArr[i] = ".";
      i--;
    }
  }

  let finalStr = sArr.filter((char) => char !== ".").join("");
  if (finalStr.includes(t)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
