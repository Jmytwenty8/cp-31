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
        // parse n as Number, c as BigInt
        let [nStr, cStr] = input[line++].trim().split(" ");
        let n = Number(nStr);
        let c = BigInt(cStr);
        // parse s as space-separated numbers into BigInt array
        let s = input[line++].trim().split(" ").map(x => BigInt(x));
        solve(n, c, s);
    }
}

function validWidth(s, c, w) {
    // don't mutate s; compute sum of (s[i] + w)^2 using BigInt arithmetic
    let res = 0n;
    for (let i = 0; i < s.length; i++) {
        let v = s[i] + w + w;
        res += v * v;
        if (res > c) break; // early exit if already exceeded
    }
    return res > c;
}

function solve(n, c, s) {
    let lo = 0n;
    let hi = c; // safe upper bound

    while (lo < hi) {
        let mid = (lo + hi) / 2n;
        if (validWidth(s, c, mid)) {
            hi = mid;
        } else {
            lo = mid + 1n;
        }
    }
    console.log((lo - 1n).toString());
}