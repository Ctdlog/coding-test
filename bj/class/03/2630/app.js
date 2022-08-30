const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input.map((i) => i.split(' ').map((item) => +item));

let white = 0;
let blue = 0;

function recursion(n, x, y) {
	let sum = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			sum += arrs[j + y][i + x];
		}
	}

	if (sum === 0) white++;
	else if (sum === n * n) blue++;
	else {
		n /= 2;
		recursion(n, x, y);
		recursion(n, x + n, y);
		recursion(n, x, y + n);
		recursion(n, x + n, y + n);
	}
}

recursion(N, 0, 0);

console.log(white);
console.log(blue);
