const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(arr) {
  // Write your code
  arr = arr.map((x) => x % 42);
  let set = new Set(arr);
  let newArr = [...set];
  console.log(newArr.length);
}
