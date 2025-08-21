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
    let d = parseInt(input[line++]);
    solve(d);
  }
}

let nextPrime = (n) => {
  for (let i = n; ; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) return i;
  }
};

function solve(d) {
  let p = nextPrime(d + 1);
  let q = nextPrime(p + d);

  console.log(Math.min(p * p * p, p * q));
}

/*
 exactly 4 divisors = (1, p, p^2, p^3), (1, p, q, pq)

p-1 >=d
p^2 - p >=d
p^3 - p^2 >=d



p-1 >=d
q-p >=d
pq - q >=d


Math.min(p * p * p, p * q)
*/
