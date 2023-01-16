let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//chessboard size m*n
var m = 8;
var n = 8;

// All possible moves of a knight
var X = [2, 1, -1, -2, -2, -1, 1, 2];
var Y = [1, 2, 2, 1, -1, -2, -2, -1];

//sample chessboard
let mat = [[0, 1, 0, 1, 0, 0, 0, 1],
[1, 0, 0, 0, 1, 0, 0, 1],
[0, 0, 0, 1, 0, 0, 1, 0],
[1, 0, 0, 0, 1, 0, 0, 1],
[0, 0, 1, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 0, 0],
[1, 0, 0, 0, 1, 0, 0, 1],
[0, 0, 0, 0, 0, 0, 0, 0]]

let [a,b] = readLine().split(' ').map(Number);
function findMove(a, b, mat) {
    for (let i = 0; i < 8; i++) {
        let x = a + X[i];
        let y = b + Y[i];

        if (x >= 0 && y >= 0 && x < m && y < n && mat[x][y] == 0) {
            console.log(`(${x},${y})`);
        }
    }
}

findMove(a, b, mat);
