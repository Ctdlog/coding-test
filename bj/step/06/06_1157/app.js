const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input[0];

solution(input);

function solution(str) {
  // Write your code
  const charMap = {};
  for (let char of str.toLowerCase()) {
    charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
  }
  let max = Math.max(...Object.values(charMap));
  let maxChar = "";
  let cnt = 0;
  for (let char in charMap) {
    if (charMap[char] == max) {
      maxChar = char;
      cnt++;
    }
    if (cnt > 1) {
      console.log("?");
      return;
    }
  }
  console.log(maxChar.toUpperCase());
}
