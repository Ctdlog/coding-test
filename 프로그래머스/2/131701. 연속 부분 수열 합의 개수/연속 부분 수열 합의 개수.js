function extendCircularToLinear(elements) {
  const linearSequence = elements.concat(elements);
  return linearSequence;
}

function findContinuousSubsequenceSums(linearSequence) {
  const n = linearSequence.length;
  const uniqueSums = new Set(); 

  for (let length = 1; length <= Math.floor(n / 2); length++) {
    for (let start = 0; start < n; start++) {
      const end = start + length;
      const subsequence = linearSequence.slice(start, end);
      const subsequenceSum = subsequence.reduce((acc, val) => acc + val, 0);
      uniqueSums.add(subsequenceSum);
    }
  }

  return uniqueSums.size;
}

function solution(elements) {
  const linearSequence = extendCircularToLinear(elements);
  const result = findContinuousSubsequenceSums(linearSequence);
  return result;
}