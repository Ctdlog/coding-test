const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const nums = input.map((item) => item.split(' ').map((item) => +item));

console.log(N, nums);
