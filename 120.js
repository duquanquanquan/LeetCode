let triangle = [
    [2],
    [3,4],
    [6,5,7],
    [4,1,8,3]
];

let minimumTotal = function(triangle) {
    let row = triangle.length;
    if (row === 1) {
        return triangle[0][0]
    }
    for (let i = row - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] = Math.min(triangle[i+1][j] + triangle[i][j], triangle[i+1][j+1] + triangle[i][j])
        }
    }
    return triangle[0][0]
};

console.log(minimumTotal(triangle));
