/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    // Create sets for both arrays.
    const set1 = new Set();
    const set2 = new Set();
    const answer1 = new Set();
    const answer2 = new Set();
    for (let i = 0; i < nums1.length; i++) {
        set1.add(nums1[i]);
    };
    for (let i = 0; i < nums2.length; i++) {
        set2.add(nums2[i]);
    };
    for (let i = 0; i < nums1.length; i++) {
        if (!set2.has(nums1[i])) {
            answer1.add(nums1[i]);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (!set1.has(nums2[i])) {
            answer2.add(nums2[i]);
        }
    }
    return [Array.from(answer1), Array.from(answer2)];
};