const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

console.log(input);
solution(input);

function solution(nums) {
  // Write your code
  for (let num of nums) {
    if (num == 0) return;
    console.log(isPalindrome(num));
  }

  function isPalindrome(n) {
    const reversed = n.split('').reverse().join('');
    if (n == reversed) return 'yes';
    return 'no';
  }
}
