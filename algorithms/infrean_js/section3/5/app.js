const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString();

solution(input);

function solution(A) {
  // Write your code
  let cnt = 1;
  let before = A[0];
  let result = before;

  A = A.slice(1);
  for (x of A) {
    if (x == before) {
      cnt++;
    } else {
      if (cnt !== 1) {
        result += cnt;
      }
      result += x;
      cnt = 1;
    }
    before = x;
  }

  console.log(result);
}
