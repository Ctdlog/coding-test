const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const caseNum = input[0].split(' ');
let n = caseNum[0],
  m = caseNum[1];
input = input.slice(1);

solution(n, m, input);

function solution(n, m, arr) {
  // Write your code
  const white = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ];
  const black = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ];

  // 처음 최소값이 무조건 들어가게 초기화
  let answer = 100;
  let result = 0;

  // 8x8 사각형을 계속 돌면서 완전탐색
  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      result = check(i, j);
      // 탐색하여 기존 최솟값보다 작으면 answer 바꾸기
      if (result < answer) {
        answer = result;
      }
    }
  }

  // 특정 좌표에서(x, y) 시작하는 8x8 사각형의 다시 칠해야 하는 정사각형 개수 탐색
  function check(x, y) {
    let checkWhite = 0;
    let checkBlack = 0;
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if (arr[i][j] !== white[i - x][j - y]) {
          checkWhite++;
        }
        if (arr[i][j] !== black[i - x][j - y]) {
          checkBlack++;
        }
      }
    }

    const min = Math.min(checkBlack, checkWhite);
    return min;
  }

  console.log(answer);
}
