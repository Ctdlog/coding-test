const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [opt, ...arrs] = input;
const [N, M, B] = opt.split(' ').map(Number);

solution(N, M, B, arrs);

function solution(N, M, B, arrs) {
	// Write your code
	let count = 0;
	for (let i = 1; i <= 256; i++) {
		for (let arr of arrs) {
			arr = arr.split(' ').map(Number);
		}
	}
}
