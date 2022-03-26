const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let n = input[0],
  m = input[2];

let arr1 = input[1],
  arr2 = input[3];

solution(arr1, arr2);

function solution(arr1, arr2) {
  // Write your code
  let result = [];
  result += arr1 + " " + arr2;
  result = result.split(" ").map((item) => +item);
  result.sort((a, b) => a - b);
  console.log(result);
}
