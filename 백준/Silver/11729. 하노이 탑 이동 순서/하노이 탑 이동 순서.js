const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const K = +input[0];

let count = 0;
const answer = [];

function Hanoi(num, from, other, to) {
	if (num === 0) return;

	Hanoi(num - 1, from, to, other);
	answer.push([from, to]);
	count++;
	Hanoi(num - 1, other, from, to);
}

Hanoi(K, 1, 2, 3);

console.log(count);
console.log(answer.map((item) => item.join(' ')).join('\n'));
