const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input
	.map((i) => i.split(' ').map(Number))
	.sort((a, b) => {
		if (a[1] === b[1]) {
			return a[0] - b[0];
		} else {
			return a[1] - b[1];
		}
	});

solution(N, arrs);

function solution(n, arrs) {
	// Write your code
	let count = 1;
	let [[start, end]] = arrs.splice(0, 1);

	for (let arr of arrs) {
		const [nextStart, nextEnd] = arr;
		if (nextStart >= end) {
			end = nextEnd;
			count++;
		}
	}

	console.log(count);
}
