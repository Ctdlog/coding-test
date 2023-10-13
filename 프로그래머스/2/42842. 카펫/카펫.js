function solution(brown, yellow) {
    const total = brown + yellow;

    for (let width = 3; width <= total; width++) {
        if (total % width === 0) {
            const height = total / width;
            if (2 * (width + height - 2) === brown) {
                return [height, width];
            }
        }
    }
}