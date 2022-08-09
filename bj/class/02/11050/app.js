const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, K] = input[0].split(' ').map(Number);

solution(N, K);

function solution(N, K) {
	// Write your code
	const factorial = (num) => {
		if (num === 0 || num === 1) return 1;
		else return num * factorial(num - 1);
	};

	console.log(factorial(N) / (factorial(K) * factorial(N - K)));
}
