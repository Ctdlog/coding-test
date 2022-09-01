const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [T, ...arrs] = input;

const answer = [];
for (let i = 0; i < T * 3; i += 3) {
	let [p, n, nums] = [arrs[i], arrs[i + 1], arrs[i + 2]];

	if (n !== '0') {
		nums = nums.slice(1, arrs[i + 2].length - 1).split(',');
	} else nums = [];

	let reverseCount = 0;
	let isError = false;

	for (let fn of p) {
		if (fn === 'R') {
			reverseCount++;
		} else {
			if (!nums.length) {
				isError = true;
				break;
			} else if (reverseCount % 2) nums.pop();
			else nums.shift();
		}
	}

	if (!isError) {
		if (reverseCount % 2) console.log(`[${nums.reverse().join(',')}]`);
		else console.log(`[${nums.join(',')}]`);
	} else console.log('error');
}
