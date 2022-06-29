const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

caseInput = input[0];
numsInput = input[1].split(" ").map((item) => +item);

solution(numsInput);

function solution(nums) {
  // Write your code
  let max = Math.max(...nums);
  let tmp = 0;
  for (let x of nums) {
    tmp += (x / max) * 100;
  }
  console.log(tmp / nums.length);
}
