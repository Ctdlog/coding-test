const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();
const nums = input.map(Number);

function solution(T, nums) {
	// Write your code
	const DP = [0, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9];
	for (let i = 10; i <= 100; i++) {
		DP[i] = DP[i - 2] + DP[i - 3];
	}

	let answer = '';
	for (let num of nums) {
		answer += `${DP[num]}\n`;
	}
	return answer;
}

console.log(solution(T, nums));
