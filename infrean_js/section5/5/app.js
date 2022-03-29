const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

numInput = input[0].split(" ").map((item) => +item);
let n = numInput[0],
  k = numInput[1];
arrInput = input[1].split(" ").map((item) => +item);

solution(arrInput);

function solution(arr) {
  // Write your code
  let cnt = 0;
  let max = 0;
  for (let i = 0; i <= n; i++) {
    let tmp = arr[i] + arr[i + 1] + arr[i + 2];
    if (tmp > max) {
      max = tmp;
    }
  }
  console.log(max);
}
