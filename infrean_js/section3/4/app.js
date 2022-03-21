const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split(" ");

input = input[0];
tg = input[1];

solution(input, tg);

function solution(input, tg) {
  let result = [];
  let cnt = 0;
  // Write your code
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== tg) {
      cnt++;
    } else {
      cnt = 0;
    }
    result.push(cnt);
  }

  cnt = 0;

  for (let i = input.length - 1; i >= 0; i--) {
    if (input[i] !== tg) {
      cnt++;
    } else {
      cnt = 0;
    }
    if (result[i] > cnt) {
      result.splice(i, 1);
      result.splice(i, 0, cnt);
    }
  }
  console.log(result);
}
