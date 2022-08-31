const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const nums = input[0].split(' ').map((item) => +item);

const newArray = [...new Set(nums)].sort((a, b) => a - b);

const dic = {};
newArray.forEach((value, index) => {
	dic[value] = index;
});

const answer = [];
for (let i = 0; i < N; i++) {
	answer.push(dic[nums[i]]);
}

console.log(answer.join(' '));
