const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();
const cases = input.map((i) => i.split(' ').map((item) => +item));

for (let i = 0; i < T; i++) {
	const [x1, y1, r1, x2, y2, r2] = cases[i];
}
