/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = n;
    flowerbed.forEach((position, index) => {
        if (!position && !flowerbed[index + 1] && !flowerbed[index - 1]) {
            flowerbed[index] = 1;
            count -= 1;
        }
    })
    return count <= 0;
};