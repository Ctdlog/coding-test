/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    const DP = [gain[0]];

    for (let i=1; i<gain.length; i++) {
        DP[i] = DP[i - 1] + gain[i]
    }

    return Math.max(...DP) < 0 ? 0 : Math.max(...DP);
};