const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, k] = input.shift().split(' ').map(Number);
const coins = input.map(Number);

solution(n, k, coins);

function solution(n, k, coins) {
	// Write your code

	let worth = k;
	let count = 0;
	const newCoins = coins.sort((a, b) => b - a);

	while (worth > 0) {
		for (let coin of newCoins) {
			if (worth >= coin) {
				const quotient = Math.floor(worth / coin);
				count += quotient;
				worth -= coin * quotient;
			}
		}
	}

	console.log(count);
}
