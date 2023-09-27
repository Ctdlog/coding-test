/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    let count = 0;

    for (let i=0; i<grid.length; i++) {
        const row = grid[i];

        for (let j=0; j<grid.length; j++) {
            const column = []

            for (let k=0; k<grid.length; k++) {
                column.push(grid[k][j]);
            }

            if (areArraysEqual(row, column)) {
                count++
            }
        }        
    }

    return count;
};

function areArraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    
    return true;
}