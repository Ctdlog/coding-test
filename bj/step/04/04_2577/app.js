const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

numInput = input.map((item) => +item);

solution(numInput);

function solution(nums) {
  // Write your code
  let num = String(nums[0] * nums[1] * nums[2]);
  for (let i = 0; i <= 9; i++) {
    console.log(num.split(i).length - 1);
  }
}
