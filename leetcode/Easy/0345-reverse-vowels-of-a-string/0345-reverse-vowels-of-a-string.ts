function reverseVowels(s: string): string {
     const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    const wordVowels = s.split("").filter(v => vowels.includes(v));

    let answer = "";

    for (let i=0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            answer += wordVowels.pop();
        } else {
            answer += s[i];
        }
    }

    return answer;
};