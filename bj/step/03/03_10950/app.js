const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// numInput = +input[0];
// arrInput = input.splice(1).map((item) => item.split(" ").map((item) => +item));

solution(input);

function solution(arr) {
  // Write your code
  for (let i = 1; i <= arr[0]; i++) {
    let numbers = arr[i].split(" ");
    console.log(Number(numbers[0]) + Number(numbers[1]));
  }
}
