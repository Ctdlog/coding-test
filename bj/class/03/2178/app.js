const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);
const maze = input.map((el) => el.split('').map(Number));

solution(maze);

function solution(maze) {
	// Write your code
	const queue = [[0, 0, 1]];
	const dir = [
		[0, 1],
		[0, -1],
		[1, 0],
		[-1, 0],
	];

	while (queue.length) {
		const [x, y, dis] = queue.shift();
		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
			if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
				if (maze[nx][ny] === 1) {
					maze[nx][ny] = dis + 1;
					queue.push([nx, ny, dis + 1]);
				}
			}
		}
	}

	console.log(maze[N - 1][M - 1]);
}
