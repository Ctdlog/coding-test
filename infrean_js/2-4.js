arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(arr) {
  let count = 1;
  let sum = 0;
  arr.forEach((item) => {
    if (item == 1) {
      sum += count;
      count += 1;
    } else {
      count = 1;
    }
  });
  return sum;
}

console.log(solution(arr));
