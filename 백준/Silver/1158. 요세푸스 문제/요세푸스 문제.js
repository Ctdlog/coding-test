const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input.shift().split(' ').map(Number);

const people = Array.from({ length: N }, (v, i) => i + 1);

const answer = [];
let cnt = 0;
while (people.length > 0) {
	cnt++;
	const shifted = people.shift();
	if (cnt === K) {
		answer.push(shifted);
		cnt = 0;
	} else {
		people.push(shifted);
	}
}

console.log(`<${answer.join(', ')}>`);
