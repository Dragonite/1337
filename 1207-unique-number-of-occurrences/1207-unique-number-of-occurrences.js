/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1);
        } else {
            map.set(arr[i], 1);
        }
    }
    // We now have a map of all occurrences in arr. Now we just need a set to check if it's unique.
    const set = new Set();
    // Map.values() should be O(n), then we do O(n) again, should still be O(n) in total.
    let uniqueOccurrences = true;
    map.values().forEach(value => {
        if (set.has(value)) {
            uniqueOccurrences = false;
        }
        set.add(value);
    });
    return uniqueOccurrences;
};