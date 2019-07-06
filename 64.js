let grid = [
    [1,3,1],
    [1,5,1],
    [4,2,1]
];

let minPathSum = function(grid) {
    let minSum = grid[0][0],
        row = grid.length,
        col = grid[0].length;

    for (let i = 1; i < grid[0].length; i++) {
        grid[0][i] = grid[0][i-1] + grid[0][i]
    }
    for (let i = 1; i < row; i++) {
        grid[i][0] = grid[i-1][0] + grid[i][0];
        for (let j = 1; j < col; j++) {
            grid[i][j] = grid[i][j] + Math.min(grid[i-1][j], grid[i][j-1])
        }
    }
    return grid[row-1][col-1]
};

console.log(minPathSum(grid));
