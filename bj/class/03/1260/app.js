const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const paths = input.map((path) => path.split(' ').map(Number));

solution(N, M, V, paths);

function solution(N, M, V, paths) {
	// Write your code
	const graph = Array.from({ length: N + 1 }, (e) => []);
	for (const [from, to] of paths) {
		graph[from].push(to);
		graph[to].push(from);
	}

	console.log(DFS(graph, V).join(' '));
	console.log(BFS(graph, V).join(' '));
}

function DFS(graph, startNode) {
	let needVisitStack = [startNode];
	let visitedQueue = [];
	graph.forEach((v) => v.sort((a, b) => b - a));

	while (needVisitStack.length) {
		const node = needVisitStack.pop();
		if (!visitedQueue.includes(node)) {
			visitedQueue.push(node);
			needVisitStack = [...needVisitStack, ...graph[node]];
		}
	}

	return visitedQueue;
}

function BFS(graph, startNode) {
	let needVisitStack = [startNode];
	let visitedQueue = [];
	graph.forEach((v) => v.sort((a, b) => a - b));

	while (needVisitStack.length) {
		const node = needVisitStack.shift();
		if (!visitedQueue.includes(node)) {
			visitedQueue.push(node);
			needVisitStack = [...needVisitStack, ...graph[node]];
		}
	}

	return visitedQueue;
}
