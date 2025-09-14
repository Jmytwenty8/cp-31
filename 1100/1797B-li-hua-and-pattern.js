const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line.trim());
});

rl.on('close', () => {
    main();
});

function main() {
    let t = parseInt(input[0]);
    let index = 1;

    for (let _ = 0; _ < t; _++) {
        let [n, k] = input[index++].split(' ').map(Number);
        let grid = [];
        for (let i = 0; i < n; i++) {
            grid.push(input[index++].split(' ').map(Number));
        }

        let diff = 0;
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                let ni = n - 1 - i;
                let nj = n - 1 - j;
                if (i > ni || (i === ni && j > nj)) continue;
                if (grid[i][j] !== grid[ni][nj]) {
                    diff++;
                }
            }
        }

        if (diff > k) {
            console.log("NO");
        } else if ((k - diff) % 2 === 0 || n % 2 === 1) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}
