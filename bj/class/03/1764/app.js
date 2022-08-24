const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

function solution(N, M, strs) {
	// Write your code
	const noHear = new Set();
	const noSee = new Set();

	for (let i = 0; i < strs.length; i++) {
		if (i < N) {
			noHear.add(strs[i]);
		} else {
			noSee.add(strs[i]);
		}
	}

	let answer = [];
	noSee.forEach((v) => {
		if (noHear.has(v)) answer.push(v);
	});

	return answer.length + '\n' + answer.sort().join('\n');
}

console.log(solution(N, M, input));
