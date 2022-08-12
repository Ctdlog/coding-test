const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

N = +input.shift();
P = input[0].split(' ').map((item) => +item);

solution(N, P);

function solution(n, orders) {
	// Write your code
	let answer = 0;
	const newOrders = orders.sort((a, b) => a - b);

	while (newOrders.length !== 0) {
		const sum = newOrders.reduce((a, b) => a + b, 0);
		answer += sum;
		newOrders.pop();
	}

	console.log(answer);
}
