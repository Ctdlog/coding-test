function solution(a, b, c) {
  let max;
  let sum = a + b + c;
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max >= max) return "YES";
  else return "NO";
}

console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
