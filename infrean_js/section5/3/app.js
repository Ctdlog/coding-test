const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let numInput = input[0].split(" ").map((item) => +item);
let n = numInput[0],
  m = numInput[1];

let arrInput = input[1].split(" ").map((item) => +item);

solution(arrInput);

function solution(arr) {
  // Write your code
  for (let i of arr) {
    console.log(i);
  }
}
