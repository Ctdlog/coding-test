const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const keyboard = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
];

const consonants = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v'];
const vowels = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'b', 'n', 'm'];

const [SL, SR] = input.shift().split(' ');
const alphabets = input.shift();

const findCoordinates = (keyboard, target) => {
  for (let row = 0; row < keyboard.length; row++) {
    for (let col = 0; col < keyboard[row].length; col++) {
      if (keyboard[row][col] === target) {
        return { x: col, y: row };
      }
    }
  }

  return null;
};

let currentSL = SL;
let currentSR = SR;
let answer = 0;

for (const alphabet of alphabets) {
  if (consonants.includes(alphabet)) {
    const { x, y } = findCoordinates(keyboard, alphabet);
    const { x: currentX, y: currentY } = findCoordinates(keyboard, currentSL);
    answer += Math.abs(currentX - x) + Math.abs(currentY - y) + 1;
    currentSL = alphabet;
  }

  if (vowels.includes(alphabet)) {
    const { x, y } = findCoordinates(keyboard, alphabet);
    const { x: currentX, y: currentY } = findCoordinates(keyboard, currentSR);
    answer += Math.abs(currentX - x) + Math.abs(currentY - y) + 1;
    currentSR = alphabet;
  }
}

console.log(answer);
