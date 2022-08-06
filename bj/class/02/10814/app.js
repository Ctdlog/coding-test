const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

N = input.shift();

solution(N, input);

function solution(N, input) {
  // Write your cod
  const users = input.map((user) => user.split(' '));
  users.sort((a, b) => Number(a[0]) - Number(b[0]));

  for (let user of users) {
    console.log(`${user[0]} ${user[1]}`);
  }
}
