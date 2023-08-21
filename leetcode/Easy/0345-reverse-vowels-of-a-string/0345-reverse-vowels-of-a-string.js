/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

    const wordVowels = s.split("").filter(v => vowels.includes(v));

    console.log(wordVowels);

    let answer = "";

    for (let i=0; i<s.length; i++) {
        if (vowels.includes(s[i])) {
            answer += wordVowels.pop();
        } else {
            answer += s[i];
        }
    }

    console.log(wordVowels);


    return answer;
};