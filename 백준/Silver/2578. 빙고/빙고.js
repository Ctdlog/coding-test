const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const bingo = input.slice(0, 5).map((item) => item.split(' ').map(Number));
const arrs = input.slice(5, 10).map((item) => item.split(' ').map(Number));

const nums = [];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    nums.push(arrs[i][j]);
  }
}

const checkNumber = (number) => {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingo[i][j] === number) {
        bingo[i][j] = 0;
        return;
      }
    }
  }
};

const getBingoCount = () => {
  let count = 0;

  if (
    bingo[0][0] + bingo[1][1] + bingo[2][2] + bingo[3][3] + bingo[4][4] ===
    0
  ) {
    count++;
  }

  if (
    bingo[4][0] + bingo[3][1] + bingo[2][2] + bingo[1][3] + bingo[0][4] ===
    0
  ) {
    count++;
  }

  let sum = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      sum += bingo[i][j];
    }
    if (sum === 0) {
      count++;
    }
    sum = 0;
  }

  let sum2 = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      sum2 += bingo[j][i];
    }
    if (sum2 === 0) {
      count++;
    }
    sum2 = 0;
  }

  return count;
};

let answer = 0;

while (nums.length > 0) {
  const shifted = nums.shift();
  answer++;
  checkNumber(shifted);
  const bingoCount = getBingoCount();
  if (bingoCount >= 3) {
    console.log(answer);
    break;
  }
}
