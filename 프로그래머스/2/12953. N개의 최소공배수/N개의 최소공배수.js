function solution(arr) {
    return findLCM(arr);
}

function gcd(a, b) {
    if (b === 0) {
        return a;
    }
    
    return gcd(b, a % b);
}


function findLCM(arr) {
    if (arr.length === 2) {
        const [a, b] = arr;
        return (a * b) / gcd(a, b);
    } else if (arr.length > 2) {
        const [first, second, ...rest] = arr;
        const partialLCM = findLCM([first, second]);
        return findLCM([partialLCM, ...rest]);
    } else {
        return null; 
    }
}