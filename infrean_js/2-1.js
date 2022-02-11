array = [7, 3, 9, 5, 6, 12];

function solution(n) {
  a = [];
  let before = 0;
  for (i of array) {
    if (i > before) {
      a.push(i);
    }
    before = i;
  }
  return a;
}

console.log(solution(array));
