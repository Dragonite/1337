const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
const isVowel = (letter) => {
    return vowels.has(letter);
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const result = Array.from(s);
    let left = 0;
    let right = s.length - 1;
    while (right > left) {
        if (!isVowel(s[left]) && !isVowel(s[right])) {
            left += 1;
            right -= 1;
        } else if (!isVowel(s[left])) {
            left += 1;
        } else if (!isVowel(s[right])) {
            right -= 1;
        } else {
            // Do a swap here, then fix indexes.
            const tempLeft = s[left];
            result[left] = result[right];
            result[right] = tempLeft;
            left += 1;
            right -= 1;
        }
    }
    return result.join('');
};