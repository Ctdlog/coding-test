const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

solution(N, K);

function solution(N, K) {
	// Write your code
	const nums = [];
	for (let i = 1; i <= N; i++) {
		nums.push(i);
	}

	const answer = [];
	let count = 0;
	while (answer.length !== N) {
		count++;
		const shifted = nums.shift();
		if (count === K) {
			answer.push(shifted);
			count = 0;
		} else {
			nums.push(shifted);
		}
	}

	console.log(`<${answer.join(', ')}>`);
}
