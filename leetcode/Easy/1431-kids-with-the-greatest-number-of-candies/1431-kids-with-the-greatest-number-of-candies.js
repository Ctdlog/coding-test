/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandies = Math.max(...candies);

    const answer = [];

    for (const candy of candies) {
        if (candy + extraCandies < maxCandies) {
            answer.push(false);
        } else {
            answer.push(true);
        }
    }

    return answer;
};