let arr = [25, 23, 11, 47, 53, 17, 33];

function solution(x, arr) {
  let answer = 0;
  let filtered = [];
  for (i in arr) {
    filtered.push(arr[i] % 10);
  }
  answer = filtered.filter((i) => i == x);
  return answer.length;
}

console.log(solution(3, arr));
