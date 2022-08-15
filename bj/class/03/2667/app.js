const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input.map((i) => i.split('').map(Number));

let home = 0;
const dir = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];

function DFS(x, y) {
	if (x >= 0 && y >= 0 && x < N && y < N) {
		if (arrs[x][y] === 1) {
			arrs[x][y] = 0;
			home++;
			for (let i = 0; i < 4; i++) {
				DFS(x + dir[i][0], y + dir[i][1]);
			}
		}
	}
}

function solution(n, arrs) {
	// Write your code

	let count = [];

	for (let x = 0; x < arrs.length; x++) {
		for (let y = 0; y < arrs.length; y++) {
			if (arrs[x][y] === 1) {
				DFS(x, y);
				count.push(home);
				home = 0;
			}
		}
	}

	count.sort((a, b) => a - b);
	console.log(count.length);
	console.log(count.join('\n'));
}

solution(N, arrs);
