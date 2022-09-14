const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

boardInput = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

movesInput = [1, 5, 3, 5, 1, 2, 1, 4];

solution(boardInput, movesInput);

function solution(board, moves) {
  // Write your code
  let answer = 0;
  let stack = [];
  let len = boardInput.length;
  moves.forEach((pos) => {
    for (let i = 0; i < len; i++) {
      if (board[i][pos - 1] !== 0) {
        let tmp = board[i][pos - 1];
        board[i][pos - 1] = 0;
        if (tmp === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break;
      }
    }
  });
  console.log(answer);
}
