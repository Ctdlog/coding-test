const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].toLowerCase();
console.log(input);
len = Math.floor(input.length / 2);

solution(input);

function solution(A) {
  let result = "YES";
  // Write your code
  for (let i = 0; i < len; i++) {
    if (
      input.charCodeAt(i) >= 97 &&
      input.charCodeAt(i) <= 122 &&
      input[i] !== input[input.length - 1 - i]
    ) {
      result = "NO";
      break;
    }
  }
  console.log(result);
}
