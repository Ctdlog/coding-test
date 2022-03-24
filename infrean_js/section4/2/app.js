const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split(" ");
let n = +num[0],
  m = +num[1];

let arrInput = input
  .slice(1)
  .map((item) => item.split(" ").map((item) => +item));

arr = arrInput.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));
arr[0][0] = arr[0][0] / 2;

solution(arr);

function solution(A) {
  // Write your code
  let cnt = 0;
  let result = [];
  for (let i of arr) {
    result.push(i[0] + i[1]);
  }
  result.sort((a, b) => a - b);
  for (let i of result) {
    m -= i;
    if (m >= 0) {
      cnt += 1;
    }
  }
  console.log(cnt);
}
