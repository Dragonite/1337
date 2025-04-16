/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // Generate array first.
    let cumulative = 0;
    const left = [];
    const right = [];
    // O(n)
    for (let i = 0; i < nums.length; i++) {
        cumulative += nums[i];
        left.push(cumulative);
    }
    cumulative = 0;
    // O(n)
    for (let i = nums.length - 1; i >= 0; i--) {
        cumulative += nums[i];
        right.push(cumulative);
    }
    // O(n)
    let pivot = -1;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 && right[nums.length - 2] === 0) {
            return 0;
        }
        if (i === nums.length - 1 && left[nums.length - 2] === 0) {
            return i;
        }
        if (left[i - 1] === right[nums.length - 1 - i - 1]) {
            return i;
        }
    }
    return pivot;
};