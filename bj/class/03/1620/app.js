const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const probs = input.splice(N);
const map = new Map(input.map((v, i) => [v, i + 1]));

const answer = [];

probs.forEach((value) => {
	if (Number.isNaN(+value)) answer.push(map.get(value));
	else answer.push(input[+value - 1]);
});

console.log(answer.join('\n'));
