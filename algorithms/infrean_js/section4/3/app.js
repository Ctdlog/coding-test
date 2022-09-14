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
  let result = 0;
  let cnt = 1;

  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        if (cnt == m) {
          result += arr[i] + arr[j] + arr[k];
          console.log(result);
        }
        cnt++;
      }
    }
  }
}
