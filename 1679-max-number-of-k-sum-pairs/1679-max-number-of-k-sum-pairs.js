/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = new Map();
    const visited = new Set();
    let combinations = 0;
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            map.set(nums[i], map.get(nums[i]) + 1);
        } else {
            map.set(nums[i], 1)
        }
    }
    map.forEach((value, key) => {
        if (map.has(k - key) && !visited.has(key) && !visited.has(k - key)) {
            if (key === (k - key)) {
                combinations += Math.floor(value / 2)
            } else {
                combinations += Math.min(value, map.get(k - key));
            }
            visited.add(k);
            visited.add(k - key);
        }
    })
    return combinations;
};