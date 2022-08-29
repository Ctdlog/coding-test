const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, r, c] = input[0].split(' ').map(Number);
const center = Math.pow(2, N) / 2;
let answer = 0;

function recursion(x, y, depth) {
	// 2, 2, 2
	if (depth === 0) {
		console.log(answer);
		return;
	}

	const nextCenter = Math.floor(Math.pow(2, depth - 1) / 2);
	const skip = Math.pow(4, depth - 1);

	if (r < x && c < y) {
		// 1사분면
		recursion(x - nextCenter, y - nextCenter, depth - 1);
	} else if (r < x && c >= y) {
		// 2사분면
		answer += skip;
		recursion(x - nextCenter, y + nextCenter, depth - 1);
	} else if (r >= x && c < y) {
		// 3사분면
		answer += skip * 2;
		recursion(x + nextCenter, y - nextCenter, depth - 1);
	} else if (r >= x && c >= y) {
		// 4사분면
		answer += skip * 3;
		recursion(x + nextCenter, y + nextCenter, depth - 1);
	}
}

recursion(center, center, N);
