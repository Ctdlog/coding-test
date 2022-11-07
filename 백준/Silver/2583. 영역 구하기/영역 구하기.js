const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [M, N, K] = input.shift().split(' ').map(Number);
const nums = input.map((item) => item.split(' ').map((item) => +item));

// 2차원 배열 초기화
const map = new Array(M);
for (let i = 0; i < M; i++) {
  map[i] = new Array(N).fill(0);
}

// 색칠된 직사각형
for (let i = 0; i < K; i++) {
  const [y1, x1, y2, x2] = nums[i];
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      map[j][i] = 1;
    }
  }
}

const areas = [];

function DFS(x, y) {
  const dirs = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  const queue = [[x, y]];
  map[x][y] = 1;
  let area = 1;
  while (queue.length) {
    const [sy, sx] = queue.pop();
    for (let i = 0; i < 4; i++) {
      const [dy, dx] = [sy + dirs[i][0], sx + dirs[i][1]];
      if (dx >= 0 && dy >= 0 && dx < N && dy < M) {
        if (map[dy][dx] === 0) {
          map[dy][dx] = 1;
          area++;
          queue.push([dy, dx]);
        }
      }
    }
  }
  areas.push(area);
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 0) {
      DFS(i, j);
    }
  }
}

console.log(areas.length + '\n' + areas.sort((a, b) => a - b).join(' '));
