function solution(k, tangerine) {
    const sizeCounts = {};
    
    for (const size of tangerine) {
        if (sizeCounts[size]) {
            sizeCounts[size]++;
        } else {
            sizeCounts[size] = 1;
        }
    }

    const sortedSizes = Object.values(sizeCounts).sort((a, b) => b - a);

    let answer = 0;

    for (let i = 0; i < sortedSizes.length; i++) {
        if (k <= 0) {
            break;
        }
        answer++;
        k -= sortedSizes[i];
    }

    return answer;
}


