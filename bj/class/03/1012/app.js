const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = +input.shift();

solution(T, input);

function solution(T, input) {
	// Write your code
	for (let i = 0; i < T; i++) {
		const [M, N, K] = input.shift().split(' ').map(Number);
		const arrs = input.splice(0, K).map((i) => i.split(' ').map(Number));
		const graph = Array.from(Array(N), () => Array(M).fill(0));

		for (const [y, x] of arrs) {
			graph[x][y] = 1;
		}

		let count = 0;
		for (let x = 0; x < N; x++) {
			for (let y = 0; y < M; y++) {
				if (graph[x][y] === 1) {
					graph[x][y] = 0;
					DFS(x, y, M, N, graph);
					count++;
				}
			}
		}

		console.log(count);
	}

	function DFS(x, y, M, N, graph) {
		const dir = [
			[-1, 0],
			[1, 0],
			[0, -1],
			[0, 1],
		];

		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
			if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
				if (graph[nx][ny] === 1) {
					graph[nx][ny] = 0;
					DFS(nx, ny, M, N, graph);
				}
			}
		}
	}
}
