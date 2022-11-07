const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N] = input;

const answer = N.split('')
	.map(Number)
	.sort((a, b) => b - a)
	.join('');

console.log(answer);
