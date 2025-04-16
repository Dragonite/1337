/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    // Can immediately terminate if the lengths of the two words do not match.
    if (word1.length !== word2.length) {
        return false;
    };
    // Swapping means that the order does not matter.
    // Transforming every occurrence of one character to another and back, means that we can essentially exchange frequencies.
    // Create maps for both the words, and then compare.
    const map1 = new Map();
    const map2 = new Map();
    const alphabet1 = new Set();
    const alphabet2 = new Set();
    for (let i = 0; i < word1.length; i++) {
        if (map1.has(word1[i])) {
            map1.set(word1[i], map1.get(word1[i]) + 1);
        } else {
            map1.set(word1[i], 1);
        }
    }
    for (let i = 0; i < word2.length; i++) {
        if (map2.has(word2[i])) {
            map2.set(word2[i], map2.get(word2[i]) + 1);
        } else {
            map2.set(word2[i], 1);
        }
    }
    let isClose = true;
    // Match the alphabet for each string
    map1.keys().forEach(key => {
        if (!map2.has(key)) {
            isClose = false;
        }
    })
    if (!isClose) {
        return false;
    }
    // At this point we only care about the counts
    // We should create a count of counts, and if they match, then it's all good.
    const countMap1 = new Map();
    const countMap2 = new Map();
    map1.values().forEach(value => {
        if (countMap1.has(value)) {
            countMap1.set(value, countMap1.get(value) + 1);
        } else {
            countMap1.set(value, 1);
        }
    })
    map2.values().forEach(value => {
        if (countMap2.has(value)) {
            countMap2.set(value, countMap2.get(value) + 1);
        } else {
            countMap2.set(value, 1);
        }
    })
    countMap1.keys().forEach(key => {
        if (countMap1.get(key) !== countMap2.get(key)) {
            isClose = false;
        }
    })
    return isClose;
};