const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split(" ");
let n = +num[0],
  m = +num[1];

let arrInput = input
  .slice(1)
  .map((item) => item.split(" ").map((item) => +item));

solution(arrInput);

function solution(arr) {
  // Write your code
  let answer = 0;
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = (pj = 0);
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          if (arr[k][s] === j) pj = s;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) answer++;
    }
  }
  console.log(answer);
}
