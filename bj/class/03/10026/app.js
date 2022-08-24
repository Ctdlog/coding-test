const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

function solution(N, input) {
	// Write your code
	const graph = input.map((i) => i.split(''));
	const blindGraph = input.map((i) => i.replaceAll('G', 'R').split(''));
	const visited = new Array(N);
	for (let i = 0; i < N; i++) {
		visited[i] = new Array(N);
	}
	const blindVisited = new Array(N);
	for (let i = 0; i < N; i++) {
		blindVisited[i] = new Array(N);
	}

	let count = 0;
	let blindCount = 0;
	for (let i = 0; i < N; i++) {
		for (let j = 0; j < N; j++) {
			if (!visited[i][j]) {
				DFS(i, j, graph[i][j], graph, visited);
				count++;
			}
			if (!blindVisited[i][j]) {
				DFS(i, j, blindGraph[i][j], blindGraph, blindVisited);
				blindCount++;
			}
		}
	}
	return `${count} ${blindCount}`;
}

function DFS(sx, sy, color, graph, visited) {
	const dir = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];

	const queue = [[sx, sy]];
	while (queue.length) {
		const [x, y] = queue.pop();
		visited[x][y] = true;
		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
			if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
				if (graph[nx][ny] === color && !visited[nx][ny]) {
					queue.push([nx, ny]);
				}
			}
		}
	}
}

console.log(solution(N, input));
