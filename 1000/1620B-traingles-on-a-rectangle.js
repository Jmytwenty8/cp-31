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
  // Process the input here
  main();
});

function main() {
  let testCases = parseInt(input[0]);
  let line = 1;

  for (let i = 0; i < testCases; i++) {
    let [w, h] = input[line++].split(" ").map(Number);
    let xSide1 = input[line++].split(" ").map(Number);
    let xSide2 = input[line++].split(" ").map(Number);
    let ySide1 = input[line++].split(" ").map(Number);
    let ySide2 = input[line++].split(" ").map(Number);

    let xSide1Points = xSide1
      .map((x, index) => {
        if (index === 0) return;
        return { x: x, y: 0 };
      })
      .sort((a, b) => a.x - b.x);

    let xSide2Points = xSide2
      .map((x, index) => {
        if (index === 0) return;
        return { x: x, y: h };
      })
      .sort((a, b) => a.x - b.x);

    let ySide1Points = ySide1
      .map((y, index) => {
        if (index === 0) return;
        return { x: 0, y: y };
      })
      .sort((a, b) => a.y - b.y);

    let ySide2Points = ySide2
      .map((y, index) => {
        if (index === 0) return;
        return { x: w, y: y };
      })
      .sort((a, b) => a.y - b.y);
    solve(w, h, xSide1Points, xSide2Points, ySide1Points, ySide2Points);
  }
}

function solve(w, h, xSide1Points, xSide2Points, ySide1Points, ySide2Points) {
  let xSide1Area =
    (xSide1Points[xSide1Points.length - 2]["x"] - xSide1Points[0]["x"]) * h;
  let xSide2Area =
    (xSide2Points[xSide2Points.length - 2]["x"] - xSide2Points[0]["x"]) * h;
  let ySide1Area =
    (ySide1Points[ySide1Points.length - 2]["y"] - ySide1Points[0]["y"]) * w;
  let ySide2Area =
    (ySide2Points[ySide2Points.length - 2]["y"] - ySide2Points[0]["y"]) * w;

  console.log(Math.max(xSide1Area, xSide2Area, ySide1Area, ySide2Area));
}
