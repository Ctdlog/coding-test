const fs = require("fs");
const filePath = "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

console.log(input[0]);

boardInput = input[0].map((item) => console.log(item));
movesInput = input[1];

console.log(boardInput, movesInput);

solution(boardInput, movesInput);

function solution(board, moves) {
  // Write your code
}
