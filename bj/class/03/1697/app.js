const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

function solution(n) {
	// Write your code
	const queue = [[n, 0]];
	const checked = new Array(100100).fill(0);
	checked[n] = 1;

	while (queue.length) {
		const [pos, t] = queue.shift();
		if (pos === K) return t;
		for (next of [pos - 1, pos + 1, pos * 2]) {
			if (!checked[next] && next >= 0 && next <= 100000) {
				checked[next] = 1;
				queue.push([next, t + 1]);
			}
		}
	}
}

console.log(solution(N, K));
