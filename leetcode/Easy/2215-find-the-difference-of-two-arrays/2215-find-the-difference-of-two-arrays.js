/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const map1 = new Map();
    const map2 = new Map();

    for (const num of nums1) {
        if (!map1.has(num)) {
            map1.set(num, 1)
        } else {
            map1.set(num, map1.get(num) + 1);
        }
    }

    for (const num of nums2) {
        if (!map2.has(num)) {
            map2.set(num, 1)
        } else {
            map2.set(num, map2.get(num) + 1);
        }
    }

    const answer1 = [];
    const answer2 = [];

    for (const [key, value] of map1) {
        if (!map2.has(key)) {
            answer1.push(key);
        }
    }

    for (const [key, value] of map2) {
        if (!map1.has(key)) {
            answer2.push(key);
        }
    }

    return [answer1, answer2];
};