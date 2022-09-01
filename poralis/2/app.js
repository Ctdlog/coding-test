function solution(N, bus_stop) {
	const visited = Array.from({ length: N }, () =>
		Array.from({ length: N }, () => 100)
	);
	for (const [x, y] of bus_stop) {
		DFS(x - 1, y - 1, N, visited);
	}

	return visited;
}

function DFS(i, j, N, visited) {
	const dir = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	const queue = [[i, j, 0]];

	while (queue.length) {
		visited[i][j] = 0;
		const [x, y, dis] = queue.shift();
		for (let i = 0; i < 4; i++) {
			const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
			if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
				if (visited[nx][ny] > dis + 1) {
					visited[nx][ny] = dis + 1;
					queue.push([nx, ny, dis + 1]);
				}
			}
		}
	}
}

console.table(
	solution(3, [
		[1, 2],
		[1, 1],
		[3, 3],
	])
);
