/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();

    for (const num of arr) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1)
        }
    }

    
    const values = [];

    for (const [key, value] of map) {
        values.push(value);
    }

    const set = new Set(values);

    if (values.length === set.size) {
        return true;
    }

    return false;
};