/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let cumulative = 0;
    for (let i = 0; i < gain.length; i++) {
        cumulative += gain[i];
        if (cumulative > max) {
            max = cumulative;
        }
    }
    return Math.max(max, 0);
};