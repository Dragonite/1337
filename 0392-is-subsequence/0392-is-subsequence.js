/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (s.length > t.length) return false;
    let sPointer = 0;
    for (let tPointer = 0; tPointer < t.length; tPointer++) {
        if (sPointer === s.length) return true;
        if (t[tPointer] === s[sPointer]) {
            sPointer += 1;
        }
    }
    return sPointer >= s.length;
};