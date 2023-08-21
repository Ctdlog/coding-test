/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let remain = n;

    for (let i=0; i<flowerbed.length; i++) {
        if (flowerbed.length === 1 && flowerbed[i] === 0) {
            flowerbed[i] = 1;
            remain = remain - 1;
            continue;
        }

        if (flowerbed[i] === 0 && i === 0 && flowerbed[i + 1] === 0) {
            flowerbed[i] = 1;
            remain = remain - 1;
            continue;
        }

        if (flowerbed[i] === 0 && i === flowerbed.length - 1 && flowerbed[i - 1] === 0) {
            flowerbed[i] = 1;
            remain = remain - 1;
            continue;
        }

        if (flowerbed[i] === 0) {
            if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
                flowerbed[i] = 1;
                remain = remain - 1;
            }
        }
    }

    console.log(flowerbed);

    return remain > 0 ? false : true;
};