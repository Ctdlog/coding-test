const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();
const cases = input.slice(0, 3);

console.log(input);

const otherAnimal = [];

for (let i = 0; i < input.length - 1; i++) {
  otherAnimal.push(input[i].split(' ')[2]);
}

const result = [];

for (let i of cases.split(' ')) {
  if (!otherAnimal.includes(i)) {
    result.push(i);
  }
}

console.log(result.join(' '));
