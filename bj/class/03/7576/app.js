const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N] = input.shift().split(' ').map(Number);
const arrs = input.map((el) => el.split(' ').map(Number));

// M = 가로, N = 세로, arrs = 토마토 상자 배열
function solution(M, N, arrs) {
	// Write your code
	const graph = Array.from(Array(N), () => Array(M).fill(0));

	for (let x = 0; x < N; x++) {
		for (let y = 0; y < M; y++) {
			if (arrs[x][y] === 1) {
				graph[x][y] = 1;
				DFS(x, y, arrs, graph);
			}
		}
	}
}

function DFS(i, j, arrs, graph) {
	const dir = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	const queue = [[i, j]];

	while (queue.length > 0) {
		for (let i = 0; i < 4; i++) {
			const [x, y] = queue.pop();
			if (x && y) {
				const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
				if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
					if (arrs[nx][ny] !== -1 && graph[nx][ny] === 0) {
						graph[nx][ny] = graph[x][y] + 1;
						queue.push([nx, ny]);
						console.log(queue);
						console.table(graph);
					}
				}
			}
		}
	}
}

solution(M, N, arrs);
