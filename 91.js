let numDecodings = function(s) {
    if (s.charAt(0) === '0') {
        return 0
    }
    let dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 1; i < s.length; i++) {
        let num = parseInt(s.charAt(i-1) + s.charAt(i));
        if (s.charAt(i) !== '0') {
            if (num > 9 && num < 27) {
                dp[i + 1] = dp[i] + dp[i - 1]
            } else {
                dp[i + 1] = dp[i]
            }
        } else {
            if (num > 9 && num < 27) {
                dp[i + 1] = dp[i - 1]
            } else {
                dp[i + 1] = 0
            }
        }
    }
    return dp[s.length]
};

console.log(numDecodings('101'));
