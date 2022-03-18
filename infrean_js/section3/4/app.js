const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input = input[0];
str = input[1];

console.log(input, str);

console.log(input.charAt(str));

function solution(A) {
  // Write your code
}
