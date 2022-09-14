let arr = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
  let filtered = arr.filter((i) => i % 2 != 0);
  let sum = 0;
  for (let i = 0; i < filtered.length; i++) {
    sum += filtered[i];
  }
  let min = Math.min(...filtered);
  console.log(sum);
  return min;
}

console.log(solution(arr));
