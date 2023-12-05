function canPlaceFlowers(flowerbed: number[], n: number): boolean {
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

    return remain <= 0;
}
