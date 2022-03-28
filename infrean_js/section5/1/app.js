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
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  // let result = [];
  // result += arr1 + " " + arr2;
  // result = result.split(" ").map((item) => +item);
  // result.sort((a, b) => a - b);
  // console.log(result);
}
