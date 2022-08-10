const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

input.pop();
solution(input);

function solution(arrs) {
	// Write your code
	let result = [];
	for (let arr of arrs) {
		let answer = 'yes';
		const stack = [];
		for (let x of arr) {
			if (x === '(' || x === '[') {
				stack.push(x);
			} else if (x === ')') {
				const poped = stack.pop();
				if (!poped || poped !== '(') answer = 'no';
			} else if (x === ']') {
				const poped = stack.pop();
				if (!poped || poped !== '[') answer = 'no';
			}
		}
		if (stack.length !== 0) answer = 'no';
		result.push(answer);
	}

	console.log(result.join('\n'));
}
