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

// function primalityTest(n) {
//   if (n <= 1) return false;
//   if (n <= 3) return true;
//   if (n % 2 === 0 || n % 3 === 0) return false;
//   for (let i = 5; i * i <= n; i += 6) {
//     if (n % i === 0 || n % (i + 2) === 0) return false;
//   }
//   return true;
// }

function gcd(a, b) {
  while (b) {
    [a, b] = [b, a % b];
  }
  return a;
}
function main() {
  let testCases = parseInt(input[0]);
  let line = 1;
  for (let i = 1; i <= testCases; i++) {
    let n = parseInt(input[line++]);
    solve(n);
  }
}

function solve(n) {
  let maxDivisor = 1;
  let maxLCM = n - 1;

  if (n % 2 === 0) {
    console.log(n / 2, n / 2);
    return;
  }

  for (let i = 3; i * i <= n; i++) {
    if (n % i === 0) {
      let newLCMOne = Math.min((i * (n - i)) / gcd(i, n - i));
      let newLCMTwo = Math.min(((n / i) * (n - n / i)) / gcd(n / i, n - n / i));

      if (newLCMOne < maxLCM) {
        maxLCM = newLCMOne;
        maxDivisor = i;
      }

      if (newLCMTwo < maxLCM) {
        maxLCM = newLCMTwo;
        maxDivisor = n / i;
      }
    }
  }
  console.log(maxDivisor, Math.abs(n - maxDivisor));
}
