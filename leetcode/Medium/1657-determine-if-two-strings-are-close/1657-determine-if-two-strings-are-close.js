/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const map1 = new Map();
    const map2 = new Map();

    for (const w of word1) {
        if (map1.has(w)) {
            map1.set(w, map1.get(w) + 1);
        } else {
            map1.set(w, 1);
        }
        
    }

    for (const w of word2) {
        if (map2.has(w)) {
            map2.set(w, map2.get(w) + 1);
        } else {
            map2.set(w, 1);
        }
    }

    if (map1.size !== map2.size) {
        return false;
    }

    const map1Values = [];

    for (const [key, value] of map1.entries()) {
        map1Values.push(value);

        if (!map2.has(key)) {
            return false;
        }
    }

    const map2Values = []

    for (const value of map2.values()) {
        map2Values.push(value);
    }

    map1Values.sort()
    map2Values.sort()

    for (let i=0; i<map1Values.length; i++) {
        if (map1Values[i] !== map2Values[i]) {
            return false;
        }
    }

    return true;
};