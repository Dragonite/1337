const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

const isVowel = (letter) => {
    return vowels.has(letter);
}
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    if (s.length < k) {
        return 0;
    }
    let maxVowelCount = 0;
    let vowelCount = 0;
    let leftPointer = 0;
    for (let i = 0; i < s.length; i++) {
        if (i < k) {
            if (isVowel(s[i])) {
                vowelCount += 1;
                maxVowelCount += 1;
            }
        } else {
            if (isVowel(s[i])) {
                vowelCount += 1;
            }
            if (isVowel(s[leftPointer])) {
                vowelCount -= 1;
            }
            leftPointer += 1;
            if (vowelCount > maxVowelCount) {
                maxVowelCount = vowelCount;
            }
        }
    }
    return maxVowelCount;
};