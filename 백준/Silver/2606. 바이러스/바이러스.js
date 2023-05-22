const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = +input.shift();
const m = +input.shift();
const nums = input
	.map((el) => el.split(' ').map(Number))
	.sort((a, b) => a[0] - b[0]);

solution(n, m, nums);

function solution(n, m, nums) {
	// Write your code
	const queue = Array.from({ length: n + 1 }, () => []);
	const checked = new Array(n + 1).fill(false);

	for (const [from, to] of nums) {
		queue[from].push(to);
		queue[to].push(from);
	}

	const willVisit = [queue[1]];

	while (willVisit.length) {
		const popedItems = willVisit.pop();
		popedItems.forEach((item) => {
			if (!checked[item]) {
				checked[item] = true;
				willVisit.push(queue[item]);
			}
		});
	}

	console.log(checked.filter((el) => el === true).length - 1);
}
