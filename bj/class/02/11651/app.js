const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

N = input.shift();
coordinates = input.map((coordinate) =>
  coordinate.split(' ').map((item) => +item)
);

solution(N, coordinates);

function solution(N, coordinates) {
  // Write your code
  coordinates.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

  let answer = '';
  coordinates.forEach((v) => {
    answer += `${v[0]} ${v[1]}\n`;
  });

  console.log(answer);
}
