const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

for (let i = 0; i < N; i++) {
  const result = [];
  const otherAnimalResult = [];

  const foxSounds = input.shift().split(' ');

  while (true) {
    const [animal, , sound] = input.shift().split(' ');
    if (animal === 'what') {
      for (let foxSound of foxSounds) {
        if (!otherAnimalResult.includes(foxSound)) {
          result.push(foxSound);
        }
      }
      console.log(result.join(' '));
      break;
    }

    otherAnimalResult.push(sound);
  }
}
