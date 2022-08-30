const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();
const arrs = input.map((i) => i.split(' ').map((item) => +item));

let count = [0, 0, 0];

function recursion(n, x, y) {
	let sum = 0;
	const arr = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			sum += arrs[j + y][i + x];
			arr.push(arrs[j + y][i + x]);
		}
	}

	if (sum === n * n) {
		count[2]++;
	} else if (sum === -(n * n)) {
		count[0]++;
	} else if (sum === 0 && !arr.includes(1)) {
		count[1]++;
	} else {
		n /= 3;
		recursion(n, x, y);
		recursion(n, x, y + n);
		recursion(n, x, y + n * 2);
		recursion(n, x + n, y);
		recursion(n, x + n, y + n);
		recursion(n, x + n, y + n * 2);
		recursion(n, x + n * 2, y);
		recursion(n, x + n * 2, y + n);
		recursion(n, x + n * 2, y + n * 2);
	}
}

recursion(N, 0, 0);

console.log(count.join('\n'));
