const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, nums, M, targets] = input;

solution(N, nums, M, targets);

function solution(N, nums, M, targets) {
	// Write your code
	nums = nums.split(' ').map(Number);
	targets = targets.split(' ').map(Number);

	const map = new Map();
	for (let num of nums) {
		if (!map.has(num)) {
			map.set(num, 1);
		} else {
			map.set(num, map.get(num) + 1);
		}
	}

	let answer = '';
	for (let target of targets) {
		if (map.has(target)) {
			answer += `${map.get(target)} `;
		} else {
			answer += '0 ';
		}
	}

	console.log(answer);
}
