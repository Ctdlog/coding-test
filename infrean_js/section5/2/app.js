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
  arr1 = arr1.split(" ").map((item) => +item);
  arr2 = arr2.split(" ").map((item) => +item);
  for (let i of arr1) {
    if (arr2.includes(i)) {
      result.push(i);
    }
  }
  result.sort((a, b) => a - b);
  console.log(result);
}
