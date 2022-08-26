const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input.map((el) => el.split('').map(Number));

function solution(n, arrs) {
	// Write your code
	const quadTree = [];
	const recursion = (n, x, y) => {
		let sum = 0;
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				sum += arrs[j + y][i + x];
			}
		}

		if (sum === 0) quadTree.push('0');
		else if (sum === n * n) quadTree.push('1');
		else {
			n /= 2;
			quadTree.push('(');
			recursion(n, x, y);
			recursion(n, x + n, y);
			recursion(n, x, y + n);
			recursion(n, x + n, y + n);
			quadTree.push(')');
		}
	};

	recursion(n, 0, 0);
	return quadTree.join('');
}

console.log(solution(N, arrs));
