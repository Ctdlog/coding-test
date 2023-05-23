const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [N, M, V] = input.shift().split(' ').map(Number);
const nums = input.map((el) => el.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [from, to] of nums) {
  graph[to].push(from);
  graph[from].push(to);
}

graph.forEach((arr) => arr.sort((a, b) => a - b));

const DFS_VISITED = new Array(N + 1).fill(false);
const DFS_ANSWER = [];

function DFS(v) {
  if (DFS_VISITED[v]) {
    return;
  }

  DFS_VISITED[v] = true;
  DFS_ANSWER.push(v);

  graph[v].forEach((vertex) => {
    if (!DFS_VISITED[vertex]) {
      DFS(vertex);
    }
  });
}

DFS(V);

const BFS_VISITED = new Array(N + 1).fill(false);
const BFS_ANSWER = [];

function BFS(v) {
  const willVisit = [v];

  while (willVisit.length > 0) {
    const poped = willVisit.shift();
    if (BFS_VISITED[poped]) {
      continue;
    }

    BFS_VISITED[poped] = true;
    BFS_ANSWER.push(poped);

    graph[poped].forEach((vertex) => {
      if (!BFS_VISITED[vertex]) {
        willVisit.push(vertex);
      }
    });
  }
}

BFS(V);

console.log(DFS_ANSWER.join(' '));
console.log(BFS_ANSWER.join(' '));
