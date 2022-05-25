const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0].split(" ").map((item) => +item);

solution(input);

function solution(nums) {
  // Write your code
  let a = nums[0],
    b = nums[1],
    c = nums[2];

  let answer = Math.floor(a / (c - b)) + 1;

  b >= c ? (answer = -1) : answer;

  console.log(answer);
}
