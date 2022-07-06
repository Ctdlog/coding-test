const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

input = input.slice(1).map((item) => +item);

solution(input);

function solution(nums) {
  // Write your code
  nums = nums.sort((a, b) => a - b);

  const mean = Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
  const median = nums[Math.floor(nums.length / 2)];
  let mode = 0;
  const range = Math.max(...nums) - Math.min(...nums);

  const map = new Map();
  let max = 1;
  for (let number of nums) {
    if (map.has(number)) {
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  }

  const maxArr = [];
  for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
  }

  mode = maxArr.length === 1 ? maxArr[0] : maxArr[1];

  if (mean === -0) console.log(0);
  else console.log(mean);
  console.log(median);
  console.log(mode);
  console.log(range);
}
