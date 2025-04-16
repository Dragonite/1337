/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let zeroIndexes = [];
    let position = 0;
    let left = 0;
    let maxLength = 0;
    for (let right = 0; right < nums.length; right++) {
        if (!nums[right]) {
            zeroIndexes.push(right);
            if (k > 0) {
                k -= 1;
            } else {
                if (position < zeroIndexes.length) {
                    left = zeroIndexes[position] + 1;
                    position += 1;
                }
            }
        }
        if (((right + 1) - left) > maxLength) {
            maxLength = (right + 1) - left;
        };
    }
    return maxLength;
};