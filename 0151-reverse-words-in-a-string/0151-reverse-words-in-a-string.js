/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let currentWord = '';
    let result = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== ' ') {
            currentWord += s[i];
        } else {
            if (currentWord) {
                // On the first iteration, make sure not to add a space here.
                result = result ? `${currentWord} ${result}` : currentWord;
            }
            currentWord = '';
        }
    }
    if (currentWord) {
        result = result ? `${currentWord} ${result}` : currentWord;
    }
    return result;
};