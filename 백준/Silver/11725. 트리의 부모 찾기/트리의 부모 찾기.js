const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const nums = input.map((v) => v.split(' ').map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (const [from, to] of nums) {
  graph[to].push(from);
  graph[from].push(to);
}

function BFS(v) {
  const queue = [];
  const visited = new Array(N + 1).fill(0);
  visited[1] = 1;

  for (const next of graph[1]) {
    visited[next] = 1;
    queue.push(next);
  }

  while (queue.length) {
    const poped = queue.shift();
    for (const next of graph[poped]) {
      if (!visited[next]) {
        visited[next] = poped;
        queue.push(next);
      }
    }
  }

  console.log(visited.slice(2).join('\n'));
}

BFS(1);
