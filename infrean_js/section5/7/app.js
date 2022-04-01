const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

str1 = input[0];
str2 = input[1];

solution(str1, str2);

function solution(a, b) {
  // Write your code
  // a = a.toLowerCase();
  // b = b.toLowerCase();
  let answer = "YES";
  let sH = new Map();

  for (let x of a) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (let x of b) {
    if (!sH.has(x) || sH.get(x) === 0) answer = "NO";
    sH.set(x, sH.get(x) - 1);
  }

  console.log(sH);

  console.log(answer);
}
