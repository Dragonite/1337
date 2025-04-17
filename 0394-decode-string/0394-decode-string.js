/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const numberStack = [];
    const stringStack = [];
    let currentNumber = '';
    let currentString = '';
    for (let i = 0; i < s.length; i++) {
        // If it's a number
        if (s[i] === '[') {
            // Left bracket
            numberStack.push(parseInt(currentNumber, 10));
            stringStack.push(currentString);
            currentNumber = '';
            currentString = '';
        } else if (s[i] === ']') {
            // Right bracket
            const num = numberStack.pop();
            const str = stringStack.pop();
            currentString = str + currentString.repeat(num);
        } else if (parseInt(s[i], 10) >= 0) {
            // Number
            currentNumber += s[i];
        } else {
            // String
            currentString += s[i];
        }
    }
    return currentString;
};