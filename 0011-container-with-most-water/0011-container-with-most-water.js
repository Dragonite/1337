/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let currentMax = 0;
    while (right > left) {
        currentMax = Math.max(currentMax, (right - left) * Math.min(height[right], height[left]));
        if (height[left] > height[right]) {
            right -= 1;
        } else {
            left += 1;
        }
    }
    return currentMax;
};