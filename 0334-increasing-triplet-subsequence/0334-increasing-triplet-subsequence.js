/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity;
    let second = Infinity;
    let third = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < first) {
            first = nums[i];
        } else if (nums[i] < second) {
            if (nums[i] > first) {
                second = nums[i];
            }
        } else {
            if (nums[i] > second) {
                return true;
            }
        }
    }
    return false;
};