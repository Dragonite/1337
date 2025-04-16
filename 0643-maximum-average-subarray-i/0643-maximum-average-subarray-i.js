/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length < k) {
        return 0;
    };
    let maxAverage = 0;
    let sum = 0;
    let leftPointer = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i < k) {
            sum += nums[i];
            maxAverage = sum / k;
            continue;
        } else {
            sum += nums[i];
            sum -= nums[leftPointer];
            leftPointer += 1;
            if ((sum / k) > maxAverage) {
                maxAverage = sum / k;
            }
        }
    }
    return maxAverage;
};