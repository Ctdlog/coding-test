function solution(N)
{
  let ans = 0;

  while (N > 0) {
    if (N % 2 === 0) {
      N = N / 2;
    } else {
      N = N - 1;
      ans++;
    }
  }

  return ans;
}