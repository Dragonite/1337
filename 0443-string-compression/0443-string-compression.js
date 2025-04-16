/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    if (chars.length === 1) return 1;
    let characterPosition = 0;
    let currentCount = 1;
    for (let i = 0; i < chars.length; i++) {
        if ((chars[i] !== chars[i + 1]) || i + 1 === chars.length) {
            chars[characterPosition] = chars[i];
            characterPosition += 1;
            if (currentCount > 1) {
                const countStr = `${currentCount}`;
                for (let j = 0; j < countStr.length; j++) {
                    chars[characterPosition] = countStr[j];
                    characterPosition += 1;
                }
            };
            currentCount = 1;
        } else {
            currentCount += 1;
        }
    }
    return characterPosition;
};