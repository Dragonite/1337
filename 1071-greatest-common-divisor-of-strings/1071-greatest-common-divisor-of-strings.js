/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // Proof is that if we add the first string to the second, the result has to be the same as the second string + the first for there to be a common denominator.
    if (str1 + str2 !== str2 + str1) {
        return '';
    }
    // Otherwise, we now find the greatest denominator between the two lengths of string.
    let a = str1.length;
    let b = str2.length;
    // While there is a remainder:
    while (b) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    let result = '';
    // now a is the gcd.
    for (let i = 0; i < a; i++) {
        result += str1[i];
    }
    return result;
};