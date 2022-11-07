const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M] = input.shift().split(' ').map(Number);

const visited = new Array(N + 1).fill(false);
const result = [];

const DFS = (cnt) => {
	if (cnt === M) {
		console.log(result.join(' '));
		return;
	}

	for (let i = 1; i <= N; i++) {
		if (!visited[i]) {
			visited[i] = true;
			result[cnt] = i;
			DFS(cnt + 1);
			visited[i] = false;
		}
	}
};

DFS(0);
