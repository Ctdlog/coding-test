const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const arrs = input.map((i) => i.split(' ').map((item) => +item));
const visited = Array.from({ length: N }, () =>
	Array.from({ length: M }, () => 0)
);
const dir = [
	[-1, 0],
	[1, 0],
	[0, -1],
	[0, 1],
];
const dx = [
	[0, 0, 0, 1],
	[0, 1, 2, 1],
	[0, 0, 0, -1],
	[0, -1, 0, 1],
];
const dy = [
	[0, 1, 2, 1],
	[0, 0, 0, 1],
	[0, 1, 2, 1],
	[0, 1, 1, 1],
];

let answer = 0;

function solution(n, m, arrs) {
	// Write your code
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			visited[i][j] = true;
			DFS(i, j, arrs[i][j], 1);
			visited[i][j] = false;
			expectDFS(i, j);
		}
	}

	return answer;
}

function DFS(x, y, sum, cnt) {
	if (cnt === 4) {
		answer = Math.max(answer, sum);
		return;
	}

	for (let i = 0; i < 4; i++) {
		const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
		if (nx > 0 && ny > 0 && nx < N && ny < M) {
			if (!visited[nx][ny]) {
				visited[nx][ny] = true;
				DFS(nx, ny, sum + arrs[nx][ny], cnt + 1);
				visited[nx][ny] = false;
			}
		}
	}
}

function expectDFS(x, y) {
	for (let i = 0; i < 4; i++) {
		let flag = false;
		let sum = 0;

		for (let j = 0; j < 4; j++) {
			let nx = x + dx[i][j];
			let ny = y + dy[i][j];

			if (nx < 0 || nx >= N || ny < 0 || ny >= M) {
				flag = true;
				break;
			} else {
				sum += arrs[nx][ny];
			}
		}
		if (!flag) {
			ans = Math.max(answer, sum);
		}
	}
}

console.log(solution(N, M, arrs));
