let numTrees = function(n) {
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = 0;
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 -j]
        }
    }
    return dp[n]
};

console.log(numTrees(2));
