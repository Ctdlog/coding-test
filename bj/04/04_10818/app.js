const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

caseinput = input[0];
arrInput = input[1].split(" ").map((item) => +item);

solution(arrInput);

function solution(arr) {
  // Write your code
  arr = arr.sort((a, b) => a - b);
  console.log(arr[0], arr[arr.length - 1]);
}
