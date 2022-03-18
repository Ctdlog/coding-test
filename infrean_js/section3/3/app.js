const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0];

solution(input);

function solution(A) {
  let result = "";
  for (i of A) {
    if (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57) {
      if (result == "" && i.charCodeAt(0) == 48) {
        continue;
      }
      result += i;
    }
  }

  console.log(result);
  // Write your code
}
