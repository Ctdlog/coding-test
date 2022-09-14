const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let num = input[0].split(" ");
let n = +num[0],
  m = +num[1];

let arrInput = input
  .slice(1)
  .map((item) => item.split(" ").map((item) => +item));

let arr = arrInput.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

solution(arr);

function solution(arr) {
  // Write your code
  let answer = 0;
  for (let i = 0; i < n; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money -= arr[j][0] + arr[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  console.log(answer);

  // let cnt = 0;
  // let result = [];
  // for (let i of arr) {
  //   result.push(i[0] + i[1]);
  // }
  // result.sort((a, b) => a - b);
  // for (let i of result) {
  //   m -= i;
  //   if (m >= 0) {
  //     cnt += 1;
  //   }
  // }
  // console.log(cnt);
}
