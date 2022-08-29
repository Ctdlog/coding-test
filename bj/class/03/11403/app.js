const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input.map((i) => i.split(' ').map((item) => +item));

function solution(n, arrs) {
	for (let k = 0; k < n; k++) {
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				if (arrs[i][k] && arrs[k][j]) {
					arrs[i][j] = 1;
				}
			}
		}
	}

	return arrs;
}

console.log(
	solution(N, arrs)
		.map((arr) => arr.join(' '))
		.join('\n')
);
