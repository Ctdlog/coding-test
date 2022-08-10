const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [L, string] = input;

solution(L, string);

function solution(L, string) {
	// Write your code
	let salt = 1;
	const M = 1234567891;
	let answer = 0;
	for (let i = 0; i < L; i++) {
		answer += (string[i].charCodeAt(0) - 96) * salt;
		answer %= M;
		salt = (salt * 31) % M;
	}
	console.log(answer);
}
