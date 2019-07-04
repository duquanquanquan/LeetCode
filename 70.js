// 递归
/*let climbStairs = function(n) {
    if (n < 1) {return 0}
    if (n === 1) {return 1}
    if (n === 2) {return 2}
    return climbStairs(n-1) + climbStairs(n-2)
};*/

//动态规划
let climbStairs = function(n) {
    if (n < 1) {return 0}
    let result = [1, 2];
    for (let i = 2; i < n; i++) {
        result[i] = result[i-1] + result[i-2]
    }
    return result[n-1]
};


console.log(climbStairs(3));
