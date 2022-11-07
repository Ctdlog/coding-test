const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, M] = [+input[0], +input[2]];
const hasCards = new Set(input[1].split(' ').map(Number));
const cards = new Set(input[3].split(' ').map(Number));

let answer = '';
for (let card of cards) {
  if (hasCards.has(card)) answer += '1 ';
  else answer += '0 ';
}

console.log(answer);
