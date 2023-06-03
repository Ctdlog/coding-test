const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const [R, C] = input.shift().split(' ').map(Number);
const maps = input.map((item) => item.split(''));

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const getSinkingStatus = (x, y) => {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dir[i][0], y + dir[i][1]];
    if (nx < 0 || ny < 0 || nx >= R || ny >= C) {
      count++;
      continue;
    }

    if (maps[nx][ny] === '.') {
      count++;
    }
  }

  return count >= 3;
};

const answer = JSON.parse(JSON.stringify(maps));

for (let y = 0; y < C; y++) {
  for (let x = 0; x < R; x++) {
    if (getSinkingStatus(x, y)) {
      answer[x][y] = '.';
    }
  }
}

let minX = Infinity;
let maxX = 0;
let minY = Infinity;
let maxY = 0;

for (let x = 0; x < R; x++) {
  for (let y = 0; y < C; y++) {
    if (answer[x][y] === 'X') {
      minX = Math.min(x, minX);
      maxX = Math.max(x, maxX);
      minY = Math.min(y, minY);
      maxY = Math.max(y, maxY);
    }
  }
}

for (let x = minX; x <= maxX; x++) {
  const temp = [];
  for (let y = minY; y <= maxY; y++) {
    temp.push(answer[x][y]);
  }

  console.log(temp.join(''));
}
