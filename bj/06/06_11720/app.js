const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

caseInput = input[0];
nums = input[1];

solution(nums);

function solution(nums) {
  // Write your code
  let result = nums
    .split("")
    .map((item) => +item)
    .reduce((a, b) => a + b);
  console.log(result);
}
