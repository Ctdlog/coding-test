const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const arrs = input[0].split(' ').map((item) => +item);

// let max = 1;
// let count = 1;
// let dir = '';
// let middle = 1;

// for (let i = 0; i < N; i++) {
//   if (arrs[i] === arrs[i + 1]) {
//     middle++;
//     count++;
//   }

//   if (arrs[i] < arrs[i + 1]) {
//     if (dir === 'down') {
//       max = Math.max(max, count);
//       count = Math.max(1, middle);
//       middle = 1;
//     }
//     dir = 'up';
//     count++;
//   }

//   if (arrs[i] > arrs[i + 1]) {
//     if (dir === 'up') {
//       max = Math.max(max, count);
//       count = Math.max(1, middle);
//       middle = 1;
//     }
//     dir = 'down';
//     count++;
//   }
// }

let count = 1;
let increaseMax = 1;
let decreaseMax = 1;

for (let i = 0; i < N; i++) {
  if (arrs[i] <= arrs[i + 1]) {
    increaseMax++;
    count = Math.max(count, increaseMax);
  } else {
    increaseMax = 1;
  }
}

for (let i = 0; i < N; i++) {
  if (arrs[i] >= arrs[i + 1]) {
    decreaseMax++;
    count = Math.max(count, decreaseMax);
  } else {
    decreaseMax = 1;
  }
}

console.log(count);
