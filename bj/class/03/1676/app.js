const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(n) {
	// Write your code
	const result = factorial(n).toString().split('').map(Number);
	let sum = 0;
	for (let i = result.length - 1; i >= 0; i--) {
		if (result[i]) return sum;
		sum++;
	}
}

function factorial(n) {
	return n ? BigInt(n) * factorial(n - 1) : 1n;
}

console.log(solution(N));
