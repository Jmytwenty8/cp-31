const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on('line', (line) => {
    input.push(line);
});

rl.on('close', () => {
    main();
});

function main() {
    let testCases = parseInt(input[0]);
    let line = 1;



    for (let t = 0; t < testCases; t++) {
        let [n, x] = input[line++].trim().split(' ').map(Number);
        let res = 0;
        for (let i = 0; i < 3; i++) {
            let arr = input[line++].trim().split(' ').map(Number);
            for (let j = 0; j < n; j++) {
                if ((x | arr[j]) !== x) {
                    break;
                }
                res = res | arr[j];
            }
        }
        if (res === x) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }


}