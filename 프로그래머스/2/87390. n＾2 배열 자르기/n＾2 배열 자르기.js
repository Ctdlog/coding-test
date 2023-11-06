function solution(n, left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        const maxVal = Math.max(row, col);
        result.push(maxVal + 1);
    }
    return result;
}