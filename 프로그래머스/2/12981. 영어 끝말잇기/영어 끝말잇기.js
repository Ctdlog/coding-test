function solution(n, words) {
    let usedWords = new Set(); 
    let prevWord = words[0]; 
    usedWords.add(prevWord); 

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        if (usedWords.has(currentWord) || currentWord[0] !== prevWord[prevWord.length - 1]) {
            const personNumber = (i % n) + 1; 
            const turn = Math.ceil((i + 1) / n); 
            return [personNumber, turn];
        }

        usedWords.add(currentWord); 
        prevWord = currentWord;
    }

    return [0, 0]; // 탈락자가 없을 경우
}