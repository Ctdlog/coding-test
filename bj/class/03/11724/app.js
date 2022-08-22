const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arrs = input.map((i) => i.split(' ').map(Number));

const checked = new Array(N + 1).fill(false);
const graph = Array.from({ length: N + 1 }, () => []);

function solution(N, M, arrs) {
	// Write your code
	let count = 0;
	for (const [from, to] of arrs) {
		graph[from].push(to);
		graph[to].push(from);
	}

	for (let i = 1; i <= N; i++) {
		if (!checked[i]) {
			checked[i] = true;
			DFS(i);
			count++;
		}
	}

	return count;
}

function DFS(n) {
	const queue = [graph[n]];
	while (queue.length) {
		const visited = queue.pop();
		for (let i of visited) {
			if (!checked[i]) {
				checked[i] = true;
				queue.push(graph[i]);
			}
		}
	}
}

console.log(solution(N, M, arrs));
