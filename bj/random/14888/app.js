const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const nums = input.shift().split(' ').map(Number);
let calc = input.shift().split(' ').map(Number);

function getMaxNum() {
  let sum = nums[0];
  let [plus, minus, multi, divide] = [...calc];
  for (let i = 1; i < N; i++) {
    if (minus) {
      sum = sum - nums[i];
      minus--;
    } else if (divide) {
      sum = parseInt(sum / nums[i]);
      divide--;
    } else if (plus) {
      sum = sum + nums[i];
      plus--;
    } else if (multi) {
      sum = sum * nums[i];
      multi--;
    }
  }
  return sum;
}

function getMinNum() {
  let sum = nums[0];
  let [plus, minus, multi, divide] = [...calc];
  for (let i = 1; i < N; i++) {
    if (plus) {
      sum = sum + nums[i];
      plus--;
    } else if (divide) {
      sum = parseInt(sum / nums[i]);
      divide--;
    } else if (minus) {
      sum = sum - nums[i];
      minus--;
    } else if (multi) {
      sum = sum * nums[i];
      multi--;
    }
  }
  return sum;
}

console.log(getMaxNum());
console.log(getMinNum());
