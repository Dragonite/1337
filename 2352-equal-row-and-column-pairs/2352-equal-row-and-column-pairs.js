/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const rowSet = new Map();
    const colSet = new Map();
    for (let i = 0; i < grid.length; i++) {
        let rowString = '';
        let colString = '';
        for (let c = 0; c < grid.length; c++) {
            rowString += `${grid[i][c]},`;
            colString += `${grid[c][i]},`;
        }
        if (rowSet.has(rowString)) {
            rowSet.get(rowString).push(i);
        } else {
            rowSet.set(rowString, [i]);
        }
        if (colSet.has(colString)) {
            colSet.get(colString).push(i);
        } else {
            colSet.set(colString, [i]);
        }
    }
    let totalPairs = 0;
    rowSet.keys().forEach(key => {
        if (colSet.has(key)) {
            totalPairs += rowSet.get(key).length * colSet.get(key).length;
        }
    })
    return totalPairs;
};