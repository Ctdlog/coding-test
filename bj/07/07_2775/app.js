const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

input = input.splice(1).map((item) => +item);

solution(input);

// function solution(arr) {
//   // Write your code
//   let answer = 0;
//   for (let i = 0; i < arr.length; i += 2) {
//     // k는 층수, n은 호수
//     let k = arr[i],
//       n = arr[i + 1];

//     let result = 1;
//     for (let j = 0; j < n - 1; j++) {
//       result *= k + n - j;
//     }

//     for (let j = 1; j < n; j++) {
//       result /= j;
//     }

//     console.log(result);
//   }
// }

function solution(arr) {
  // Write your code
  for (let i = 0; i < arr.length; i += 2) {
    // k는 층수, n은 호수
    let k = arr[i],
      n = arr[i + 1];

    // 각 방당 인원수를 저장할 2차원 배열 선언
    const house = Array.from(Array(k + 1), () => Array(n + 1).fill(0));
    // 0층 (0층의 i호에는 i명이 산다.)
    for (let i = 1; i <= n; i++) {
      house[0][i] = i;
    }
    // 1 ~ k층 (k층 n호에는 k-1층 n호 + k층 n-1호만큼 산다.)
    for (let i = 1; i <= k; i++) {
      for (let j = 1; j <= n; j++) {
        house[i][j] = house[i - 1][j] + house[i][j - 1];
      }
    }

    // k층 n호의 인원수 출력
    console.log(house[k][n]);
  }
}
