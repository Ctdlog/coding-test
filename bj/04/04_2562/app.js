const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

arrInput = input.map((item) => +item);

solution(arrInput);

function solution(arr) {
  // Write your code
  let max = Math.max(...arr);
  let index = arr.indexOf(max) + 1;

  console.log(max);
  console.log(index);
}
