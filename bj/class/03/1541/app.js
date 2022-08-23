const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const str = input.shift();

function solution(str) {
	// Write your code
	const excludeMinus = str.split('-');
	for (let i = 0; i < excludeMinus.length; i++) {
		if (excludeMinus[i].includes('+')) {
			const splitByPlus = excludeMinus[i].split('+');
			let sum = 0;
			for (let num of splitByPlus) {
				sum += Number(num);
			}
			excludeMinus[i] = sum;
		}
	}

	const answer = excludeMinus.map(Number).reduce((a, b) => a - b);
	return answer;
}

console.log(solution(str));
